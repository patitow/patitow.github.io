import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Eye, Palette, Type, MousePointer } from 'lucide-react';
import { runAllVisualTests } from '@/utils/visualTestRunner';

interface ValidationResult {
  category: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
}

const VisualValidator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [validationResults, setValidationResults] = useState<ValidationResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runValidation = async () => {
    setIsRunning(true);
    
    try {
      // Executar testes reais
      const testResults = runAllVisualTests();
      
      const results: ValidationResult[] = [
        {
          category: 'Gradientes',
          status: testResults.gradients.status === 'PASS' ? 'pass' : 'fail',
          message: testResults.gradients.status === 'PASS' ? 'Transições entre seções suaves' : 'Problemas encontrados nos gradientes',
          details: `Seções testadas: ${Object.keys(testResults.gradients).filter(k => k !== 'status').join(', ')}`
        },
        {
          category: 'Legibilidade',
          status: testResults.legibility.status === 'PASS' ? 'pass' : 'fail',
          message: testResults.legibility.status === 'PASS' ? 'Contraste de texto adequado' : 'Problemas de contraste encontrados',
          details: `${testResults.legibility.passedContrast || 0}/${testResults.legibility.totalElements || 0} elementos com contraste adequado`
        },
        {
          category: 'Botões',
          status: testResults.buttons.status === 'PASS' ? 'pass' : 'fail',
          message: testResults.buttons.status === 'PASS' ? 'Estados hover funcionais' : 'Problemas nos botões',
          details: `${testResults.buttons.passedHover || 0}/${testResults.buttons.totalButtons || 0} botões com transições adequadas`
        },
        {
          category: 'Harmonia Cromática',
          status: testResults.colorHarmony.status === 'PASS' ? 'pass' : 'fail',
          message: testResults.colorHarmony.status === 'PASS' ? 'Paleta roxa consistente' : 'Inconsistências na paleta',
          details: `${testResults.colorHarmony.correctPurpleUsage || 0}/${testResults.colorHarmony.totalPurpleElements || 0} elementos com cor roxa correta`
        },
        {
          category: 'Animações',
          status: testResults.transitions.status === 'PASS' ? 'pass' : 'warning',
          message: testResults.transitions.status === 'PASS' ? 'Transições suaves' : 'Animações podem ser otimizadas',
          details: `${testResults.transitions.smoothTransitions || 0}/${testResults.transitions.totalAnimatedElements || 0} elementos com transições suaves`
        },
        {
          category: 'Integração',
          status: testResults.seamlessIntegration.status === 'PASS' ? 'pass' : 'fail',
          message: testResults.seamlessIntegration.status === 'PASS' ? 'Integração seamless' : 'Problemas de integração',
          details: 'Overflow, responsividade e performance verificados'
        }
      ];
      
      setValidationResults(results);
    } catch (error) {
      console.error('Erro ao executar testes visuais:', error);
      setValidationResults([{
        category: 'Erro',
        status: 'fail',
        message: 'Erro ao executar testes',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      }]);
    } finally {
      setIsRunning(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'fail':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'border-green-400 bg-green-400/10';
      case 'fail':
        return 'border-red-400 bg-red-400/10';
      case 'warning':
        return 'border-yellow-400 bg-yellow-400/10';
      default:
        return 'border-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50" style={{ zIndex: 9999 }}>
      {/* Toggle Button */}
      <motion.button
        className="fixed bottom-4 right-4 pointer-events-auto glass rounded-full p-3 text-purple hover:text-white transition-colors shadow-lg"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ zIndex: 10000 }}
      >
        <Eye className="w-6 h-6" />
      </motion.button>

      {/* Validation Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-20 right-4 pointer-events-auto glass rounded-2xl p-6 max-w-sm w-full shadow-xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 10001 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-high-contrast flex items-center">
                <Palette className="w-5 h-5 mr-2 text-purple" />
                Validador Visual
              </h3>
              <button
                className="text-medium-contrast hover:text-high-contrast transition-colors"
                onClick={() => setIsVisible(false)}
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <button
                className="w-full btn-glass px-4 py-2 text-sm font-medium flex items-center justify-center"
                onClick={runValidation}
                disabled={isRunning}
              >
                {isRunning ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Validando...
                  </>
                ) : (
                  <>
                    <MousePointer className="w-4 h-4 mr-2" />
                    Executar Testes
                  </>
                )}
              </button>
            </div>

            {validationResults.length > 0 && (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {validationResults.map((result, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 rounded-lg border ${getStatusColor(result.status)}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-2">
                      {getStatusIcon(result.status)}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-high-contrast">
                          {result.category}
                        </div>
                        <div className="text-xs text-medium-contrast mt-1">
                          {result.message}
                        </div>
                        {result.details && (
                          <div className="text-xs text-gray-400 mt-1">
                            {result.details}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-medium-contrast space-y-1">
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                  <span>Protocolo Visual Ativo</span>
                </div>
                <div className="flex items-center">
                  <Type className="w-3 h-3 text-purple mr-2" />
                  <span>Contraste WCAG AA+</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-3 h-3 text-purple mr-2" />
                  <span>Harmonia Cromática</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VisualValidator;
