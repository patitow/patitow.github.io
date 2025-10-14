/**
 * Validation utilities for forms and data
 */

export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  required: (value: string | number | boolean): boolean => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
};

export interface ValidationRule {
  validator: (value: any) => boolean;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validates a value against multiple rules
 */
export function validate(value: any, rules: ValidationRule[]): ValidationResult {
  const errors: string[] = [];

  for (const rule of rules) {
    if (!rule.validator(value)) {
      errors.push(rule.message);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Common validation rules
 */
export const commonRules = {
  email: [
    {
      validator: (value: string) => validators.required(value),
      message: 'Email é obrigatório',
    },
    {
      validator: (value: string) => validators.email(value),
      message: 'Por favor, insira um email válido',
    },
  ],
  
  required: (fieldName: string) => [
    {
      validator: (value: any) => validators.required(value),
      message: `${fieldName} é obrigatório`,
    },
  ],

  minLength: (min: number, fieldName: string) => [
    {
      validator: (value: string) => validators.minLength(value, min),
      message: `${fieldName} deve ter pelo menos ${min} caracteres`,
    },
  ],

  maxLength: (max: number, fieldName: string) => [
    {
      validator: (value: string) => validators.maxLength(value, max),
      message: `${fieldName} deve ter no máximo ${max} caracteres`,
    },
  ],
};
