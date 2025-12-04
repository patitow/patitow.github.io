/**
 * Visual Validator - Sistema de Validação Visual
 * Testa e valida todos os hovers, transições e estados visuais
 */

export interface HoverTest {
  selector: string;
  description: string;
  expectedProperties: string[];
  test: () => boolean;
}

export interface VisualIssue {
  type: 'hover' | 'transition' | 'contrast' | 'spacing' | 'color';
  severity: 'error' | 'warning' | 'info';
  element: string;
  message: string;
  suggestion: string;
}

/**
 * Lista de todos os elementos com hover para validação
 */
export const hoverElements: HoverTest[] = [
  {
    selector: '.btn-cyber',
    description: 'Botão Cyber - Hover deve ter transform e shadow',
    expectedProperties: ['transform', 'box-shadow', 'background'],
    test: () => {
      const element = document.querySelector('.btn-cyber');
      if (!element) return false;
      const styles = window.getComputedStyle(element);
      return styles.transition.includes('transform') && 
             styles.transition.includes('box-shadow');
    }
  },
  {
    selector: '.glass-cyber',
    description: 'Glass Cyber - Hover deve ter border-color e transform',
    expectedProperties: ['border-color', 'transform', 'box-shadow'],
    test: () => {
      const element = document.querySelector('.glass-cyber');
      if (!element) return false;
      const styles = window.getComputedStyle(element);
      return styles.transition.includes('border-color');
    }
  },
  {
    selector: '.card-cyber',
    description: 'Card Cyber - Hover deve ter transform e shadow',
    expectedProperties: ['transform', 'box-shadow', 'border-color'],
    test: () => {
      const element = document.querySelector('.card-cyber');
      if (!element) return false;
      const styles = window.getComputedStyle(element);
      return styles.transition.includes('transform');
    }
  },
  {
    selector: 'button',
    description: 'Botões - Devem ter hover states',
    expectedProperties: ['transition', 'cursor'],
    test: () => {
      const buttons = document.querySelectorAll('button');
      if (buttons.length === 0) return false;
      let allHaveTransition = true;
      buttons.forEach(btn => {
        const styles = window.getComputedStyle(btn);
        if (!styles.transition || styles.transition === 'none') {
          allHaveTransition = false;
        }
      });
      return allHaveTransition;
    }
  },
  {
    selector: 'a',
    description: 'Links - Devem ter hover states',
    expectedProperties: ['transition'],
    test: () => {
      const links = document.querySelectorAll('a[href]');
      if (links.length === 0) return false;
      let allHaveTransition = true;
      links.forEach(link => {
        const styles = window.getComputedStyle(link);
        if (!styles.transition || styles.transition === 'none') {
          allHaveTransition = false;
        }
      });
      return allHaveTransition;
    }
  }
];

/**
 * Valida contraste de cores (WCAG AA)
 */
export function validateContrast(element: HTMLElement): VisualIssue[] {
  const issues: VisualIssue[] = [];
  const styles = window.getComputedStyle(element);
  const bgColor = styles.backgroundColor;
  const textColor = styles.color;
  
  // Simplificado - em produção usar biblioteca de contraste
  if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
    issues.push({
      type: 'contrast',
      severity: 'warning',
      element: element.tagName,
      message: 'Background transparente pode causar problemas de contraste',
      suggestion: 'Adicionar background sólido ou verificar contraste com elemento pai'
    });
  }
  
  return issues;
}

/**
 * Valida transições entre seções
 */
export function validateSectionTransitions(): VisualIssue[] {
  const issues: VisualIssue[] = [];
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach((section, index) => {
    const styles = window.getComputedStyle(section);
    const bgColor = styles.backgroundColor;
    
    // Verificar se há gradiente de transição
    const hasTransition = section.classList.contains('section-transition') ||
                         section.querySelector('.gradient-overlay');
    
    if (!hasTransition && index < sections.length - 1) {
      issues.push({
        type: 'transition',
        severity: 'info',
        element: section.id || 'unknown',
        message: 'Seção sem gradiente de transição',
        suggestion: 'Adicionar classe section-transition ou gradient-overlay'
      });
    }
  });
  
  return issues;
}

/**
 * Valida todos os hovers
 */
export function validateAllHovers(): { passed: number; failed: number; issues: VisualIssue[] } {
  const issues: VisualIssue[] = [];
  let passed = 0;
  let failed = 0;
  
  hoverElements.forEach(test => {
    try {
      if (test.test()) {
        passed++;
      } else {
        failed++;
        issues.push({
          type: 'hover',
          severity: 'warning',
          element: test.selector,
          message: `Hover não configurado corretamente: ${test.description}`,
          suggestion: `Verificar propriedades: ${test.expectedProperties.join(', ')}`
        });
      }
    } catch (error) {
      failed++;
      issues.push({
        type: 'hover',
        severity: 'error',
        element: test.selector,
        message: `Erro ao testar hover: ${error}`,
        suggestion: 'Verificar seletor e implementação'
      });
    }
  });
  
  return { passed, failed, issues };
}

/**
 * Executa validação completa
 */
export function runFullValidation(): {
  hovers: { passed: number; failed: number; issues: VisualIssue[] };
  transitions: VisualIssue[];
  contrast: VisualIssue[];
} {
  return {
    hovers: validateAllHovers(),
    transitions: validateSectionTransitions(),
    contrast: [] // Implementar validação de contraste completa
  };
}

/**
 * Log de validação para console
 */
export function logValidationResults(results: ReturnType<typeof runFullValidation>) {
  console.group('🎨 Visual Validation Results');
  
  console.group('✅ Hovers');
  console.log(`Passed: ${results.hovers.passed}`);
  console.log(`Failed: ${results.hovers.failed}`);
  if (results.hovers.issues.length > 0) {
    console.warn('Issues:', results.hovers.issues);
  }
  console.groupEnd();
  
  console.group('🔄 Transitions');
  console.log(`Issues: ${results.transitions.length}`);
  if (results.transitions.length > 0) {
    console.warn('Issues:', results.transitions);
  }
  console.groupEnd();
  
  console.groupEnd();
}

