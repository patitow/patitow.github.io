import { useState, useCallback } from 'react';
import { AppError } from '@/types';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: AppError | null;
}

interface UseAsyncStateReturn<T> extends AsyncState<T> {
  execute: (asyncFunction: () => Promise<T>) => Promise<void>;
  setData: (data: T | null) => void;
  setError: (error: AppError | null) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

/**
 * Custom hook for managing async state (loading, data, error)
 */
export function useAsyncState<T>(initialData: T | null = null): UseAsyncStateReturn<T> {
  const [state, setState] = useState<AsyncState<T>>({
    data: initialData,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const result = await asyncFunction();
      setState(prev => ({ ...prev, data: result, loading: false, error: null }));
    } catch (error) {
      const appError: AppError = {
        code: 'ASYNC_ERROR',
        message: error instanceof Error ? error.message : 'An unknown error occurred',
        details: error,
        timestamp: new Date(),
      };
      
      setState(prev => ({ ...prev, loading: false, error: appError }));
    }
  }, []);

  const setData = useCallback((data: T | null) => {
    setState(prev => ({ ...prev, data, error: null }));
  }, []);

  const setError = useCallback((error: AppError | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading }));
  }, []);

  const reset = useCallback(() => {
    setState({
      data: initialData,
      loading: false,
      error: null,
    });
  }, [initialData]);

  return {
    ...state,
    execute,
    setData,
    setError,
    setLoading,
    reset,
  };
}
