import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AppError } from '@/types';
import { ERROR_MESSAGES } from '@/constants';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: AppError) => void;
}

interface State {
  hasError: boolean;
  error: AppError | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    const appError: AppError = {
      code: 'COMPONENT_ERROR',
      message: error.message || ERROR_MESSAGES.generic,
      details: {
        stack: error.stack,
        componentStack: error.stack,
      },
      timestamp: new Date(),
    };

    return {
      hasError: true,
      error: appError,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError: AppError = {
      code: 'COMPONENT_ERROR',
      message: error.message || ERROR_MESSAGES.generic,
      details: {
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorBoundary: errorInfo.errorBoundary,
      },
      timestamp: new Date(),
    };

    this.setState({ error: appError });

    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(appError);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="glass rounded-2xl p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-2">
              Oops! Algo deu errado
            </h2>
            
            <p className="text-gray-300 mb-6">
              {this.state.error?.message || ERROR_MESSAGES.generic}
            </p>
            
            <div className="space-y-3">
              <button
                onClick={this.handleReset}
                className="w-full btn-primary px-4 py-2 rounded-lg text-white font-medium hover:bg-purple-600 transition-colors"
              >
                Tentar Novamente
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full btn-glass px-4 py-2 rounded-lg text-white font-medium transition-colors"
              >
                Recarregar Página
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Detalhes do Erro (Desenvolvimento)
                </summary>
                <pre className="mt-2 p-3 bg-gray-800 rounded text-xs text-gray-300 overflow-auto max-h-32">
                  {JSON.stringify(this.state.error, null, 2)}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
