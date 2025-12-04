/**
 * Visual Validator Component
 * Componente React para validar visualmente o site em desenvolvimento
 */

import { useEffect, useState } from 'react';
import { runFullValidation, logValidationResults, type VisualIssue } from '@/utils/visualValidator';

interface ValidationResults {
  hovers: { passed: number; failed: number; issues: VisualIssue[] };
  transitions: VisualIssue[];
  contrast: VisualIssue[];
}

export default function VisualValidator() {
  const [results, setResults] = useState<ValidationResults | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [autoRun, setAutoRun] = useState(false);

  const runValidation = () => {
    const validationResults = runFullValidation();
    setResults(validationResults);
    logValidationResults(validationResults);
    setIsVisible(true);
  };

  useEffect(() => {
    // Auto-run em desenvolvimento
    if (import.meta.env.DEV && autoRun) {
      const timer = setTimeout(() => {
        runValidation();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoRun]);

  if (!isVisible && !results) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={runValidation}
          className="glass-cyber px-4 py-2 rounded-lg text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-all"
        >
          🎨 Validar Visual
        </button>
      </div>
    );
  }

  if (!results) return null;

  const totalIssues = results.hovers.issues.length + results.transitions.length + results.contrast.length;
  const hasErrors = results.hovers.failed > 0 || totalIssues > 0;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <div className="card-cyber p-4 max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-cyan-300">Validação Visual</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* Hovers */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">Hovers</span>
              <span className={`text-xs font-bold ${
                results.hovers.failed === 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {results.hovers.passed}/{results.hovers.passed + results.hovers.failed}
              </span>
            </div>
            {results.hovers.issues.length > 0 && (
              <div className="space-y-1">
                {results.hovers.issues.map((issue, idx) => (
                  <div key={idx} className="text-xs text-yellow-300 bg-yellow-500/10 p-2 rounded">
                    <strong>{issue.element}:</strong> {issue.message}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Transitions */}
          {results.transitions.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-white">Transições</span>
                <span className="text-xs font-bold text-yellow-400">
                  {results.transitions.length} issues
                </span>
              </div>
              <div className="space-y-1">
                {results.transitions.map((issue, idx) => (
                  <div key={idx} className="text-xs text-blue-300 bg-blue-500/10 p-2 rounded">
                    <strong>{issue.element}:</strong> {issue.message}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Total</span>
              <span className={`text-xs font-bold ${
                totalIssues === 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {totalIssues} issues
              </span>
            </div>
          </div>

          <button
            onClick={runValidation}
            className="w-full btn-cyber py-2 text-sm mt-2"
          >
            Revalidar
          </button>
        </div>
      </div>
    </div>
  );
}

