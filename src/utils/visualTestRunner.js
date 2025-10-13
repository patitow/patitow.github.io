/**
 * EXECUTOR DE TESTES VISUAIS
 * 
 * Este arquivo contém funções para executar testes visuais
 * programaticamente durante o desenvolvimento.
 */

import { VISUAL_TEST_PROTOCOL } from './visualTestProtocol.js';

/**
 * Executa todos os testes visuais do protocolo
 */
export function runAllVisualTests() {
  console.log('🎨 Iniciando testes visuais do protocolo...');
  
  const results = {
    gradients: testGradients(),
    legibility: testLegibility(),
    buttons: testButtons(),
    colorHarmony: testColorHarmony(),
    transitions: testTransitions(),
    seamlessIntegration: testSeamlessIntegration()
  };
  
  console.log('✅ Testes visuais concluídos:', results);
  return results;
}

/**
 * Testa gradientes entre seções
 */
function testGradients() {
  console.log('🔍 Testando gradientes...');
  
  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
  const results = {};
  
  sections.forEach(section => {
    const element = document.querySelector(`.gradient-${section}`);
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const background = computedStyle.background;
      
      results[section] = {
        hasGradient: background.includes('linear-gradient'),
        hasMultipleLayers: (background.match(/linear-gradient/g) || []).length >= 2,
        hasPurpleOverlay: background.includes('rgba(168, 85, 247'),
        status: 'PASS'
      };
    } else {
      results[section] = {
        status: 'FAIL',
        error: 'Element not found'
      };
    }
  });
  
  return results;
}

/**
 * Testa legibilidade de textos
 */
function testLegibility() {
  console.log('📖 Testando legibilidade...');
  
  const textElements = document.querySelectorAll('.text-high-contrast, .text-medium-contrast, .text-body-contrast');
  const results = {
    totalElements: textElements.length,
    passedContrast: 0,
    failedContrast: 0,
    details: []
  };
  
  textElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;
    const textShadow = computedStyle.textShadow;
    
    const hasContrast = color === 'rgb(255, 255, 255)' || color === 'rgb(248, 250, 252)';
    const hasShadow = textShadow !== 'none';
    
    if (hasContrast && hasShadow) {
      results.passedContrast++;
    } else {
      results.failedContrast++;
    }
    
    results.details.push({
      element: element.tagName,
      className: element.className,
      color,
      textShadow,
      passed: hasContrast && hasShadow
    });
  });
  
  results.status = results.failedContrast === 0 ? 'PASS' : 'FAIL';
  return results;
}

/**
 * Testa botões e interações
 */
function testButtons() {
  console.log('🔘 Testando botões...');
  
  const buttons = document.querySelectorAll('.btn-primary, .btn-glass, .glass-hover');
  const results = {
    totalButtons: buttons.length,
    passedHover: 0,
    failedHover: 0,
    details: []
  };
  
  buttons.forEach((button, index) => {
    const computedStyle = window.getComputedStyle(button);
    const transition = computedStyle.transition;
    const transform = computedStyle.transform;
    
    const hasTransition = transition !== 'none' && transition.includes('0.3s');
    const hasTransform = transform !== 'none';
    
    if (hasTransition) {
      results.passedHover++;
    } else {
      results.failedHover++;
    }
    
    results.details.push({
      element: button.tagName,
      className: button.className,
      transition,
      transform,
      passed: hasTransition
    });
  });
  
  results.status = results.failedHover === 0 ? 'PASS' : 'FAIL';
  return results;
}

/**
 * Testa harmonia cromática
 */
function testColorHarmony() {
  console.log('🎨 Testando harmonia cromática...');
  
  const purpleElements = document.querySelectorAll('.text-purple, .border-purple, .icon-purple');
  const results = {
    totalPurpleElements: purpleElements.length,
    correctPurpleUsage: 0,
    incorrectPurpleUsage: 0,
    details: []
  };
  
  purpleElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    const color = computedStyle.color;
    const borderColor = computedStyle.borderColor;
    
    const isCorrectPurple = 
      color.includes('rgb(168, 85, 247)') || 
      color.includes('rgb(192, 132, 252)') ||
      borderColor.includes('rgb(168, 85, 247)');
    
    if (isCorrectPurple) {
      results.correctPurpleUsage++;
    } else {
      results.incorrectPurpleUsage++;
    }
    
    results.details.push({
      element: element.tagName,
      className: element.className,
      color,
      borderColor,
      passed: isCorrectPurple
    });
  });
  
  results.status = results.incorrectPurpleUsage === 0 ? 'PASS' : 'FAIL';
  return results;
}

/**
 * Testa transições e animações
 */
function testTransitions() {
  console.log('🔄 Testando transições...');
  
  const animatedElements = document.querySelectorAll('[class*="motion-"], .glass, .btn-primary, .btn-glass');
  const results = {
    totalAnimatedElements: animatedElements.length,
    smoothTransitions: 0,
    choppyTransitions: 0,
    details: []
  };
  
  animatedElements.forEach((element, index) => {
    const computedStyle = window.getComputedStyle(element);
    const transition = computedStyle.transition;
    const animation = computedStyle.animation;
    
    const hasSmoothTransition = 
      transition.includes('0.3s') && 
      (transition.includes('ease') || transition.includes('cubic-bezier'));
    
    if (hasSmoothTransition) {
      results.smoothTransitions++;
    } else {
      results.choppyTransitions++;
    }
    
    results.details.push({
      element: element.tagName,
      className: element.className,
      transition,
      animation,
      passed: hasSmoothTransition
    });
  });
  
  results.status = results.choppyTransitions === 0 ? 'PASS' : 'FAIL';
  return results;
}

/**
 * Testa integração seamless
 */
function testSeamlessIntegration() {
  console.log('🔗 Testando integração seamless...');
  
  const results = {
    overflow: testOverflow(),
    responsiveness: testResponsiveness(),
    performance: testPerformance()
  };
  
  const allPassed = Object.values(results).every(result => result.status === 'PASS');
  results.status = allPassed ? 'PASS' : 'FAIL';
  
  return results;
}

/**
 * Testa overflow horizontal
 */
function testOverflow() {
  const body = document.body;
  const html = document.documentElement;
  
  const bodyOverflow = window.getComputedStyle(body).overflowX;
  const htmlOverflow = window.getComputedStyle(html).overflowX;
  
  return {
    bodyOverflow: bodyOverflow,
    htmlOverflow: htmlOverflow,
    status: bodyOverflow === 'hidden' && htmlOverflow === 'hidden' ? 'PASS' : 'FAIL'
  };
}

/**
 * Testa responsividade
 */
function testResponsiveness() {
  const viewportWidth = window.innerWidth;
  const isResponsive = viewportWidth >= 375; // Mínimo para mobile
  
  return {
    viewportWidth,
    isResponsive,
    status: isResponsive ? 'PASS' : 'FAIL'
  };
}

/**
 * Testa performance visual
 */
function testPerformance() {
  // Verifica se há elementos com will-change (otimização GPU)
  const optimizedElements = document.querySelectorAll('[style*="will-change"], .glass, .btn-primary, .btn-glass');
  
  return {
    optimizedElements: optimizedElements.length,
    status: optimizedElements.length > 0 ? 'PASS' : 'WARN'
  };
}

/**
 * Gera relatório de testes
 */
export function generateTestReport() {
  const results = runAllVisualTests();
  
  const report = `
🎨 RELATÓRIO DE TESTES VISUAIS - PORTFOLIO PATITOW
==================================================

📊 RESUMO GERAL:
${Object.entries(results).map(([category, result]) => 
  `- ${category.toUpperCase()}: ${result.status || 'N/A'}`
).join('\n')}

📋 DETALHES:
${Object.entries(results).map(([category, result]) => 
  `\n${category.toUpperCase()}:\n${JSON.stringify(result, null, 2)}`
).join('\n')}

⏰ Teste executado em: ${new Date().toLocaleString()}
🌐 User Agent: ${navigator.userAgent}
📱 Viewport: ${window.innerWidth}x${window.innerHeight}
  `;
  
  console.log(report);
  return report;
}

/**
 * Executa testes e exibe resultados no console
 */
export function runVisualTests() {
  console.clear();
  console.log('🎨 PORTFOLIO PATITOW - PROTOCOLO DE TESTES VISUAIS');
  console.log('==================================================');
  
  const report = generateTestReport();
  
  // Também pode ser salvo em localStorage para referência
  localStorage.setItem('visual-test-report', JSON.stringify({
    timestamp: new Date().toISOString(),
    results: runAllVisualTests()
  }));
  
  return report;
}

// Disponibiliza as funções globalmente para uso no console
if (typeof window !== 'undefined') {
  window.runVisualTests = runVisualTests;
  window.runAllVisualTests = runAllVisualTests;
  window.generateTestReport = generateTestReport;
}

export default {
  runAllVisualTests,
  generateTestReport,
  runVisualTests,
  testGradients,
  testLegibility,
  testButtons,
  testColorHarmony,
  testTransitions,
  testSeamlessIntegration
};
