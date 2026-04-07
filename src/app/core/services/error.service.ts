import { Injectable, signal } from '@angular/core';

export type ErrorType = 'connection' | 'rate_limit' | 'validation' | 'unknown' | 'wrong_ingredients';

export interface AppError {
  type: ErrorType;
  title: string;
  message: string;
}

const ERROR_DEFINITIONS: Record<ErrorType, AppError> = {
  connection: {
    type: 'connection',
    title: 'Oops! Something went wrong.',
    message:'The generation service is currently unavailable. Please try again later.',

  },
  rate_limit: {
    type: 'rate_limit',
    title: 'Daily limit reached',
    message:'Youve already generated 3 recipes today. You can create new recipes again tomorrow!',

  },
  validation: {
    type: 'validation',
    title: 'Ups! Not quite enough...',
    message:'It looks like some ingredient quantities aren’t sufficient for your selected servings. Please add or adjust quantities and try again.',
  },
  unknown: {
    type: 'unknown',
    title: 'Unknown error',
    message: 'An unexpected error has occurred. Please try again.',
  },
  wrong_ingredients: {
    type: 'wrong_ingredients',
    title: 'wrong Ingredients',
    message: 'You must have entered the wrong ingredients. Please check your input and try again.',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  currentError = signal<AppError | null>(null);

  setError(type: ErrorType): void {
    const definition = ERROR_DEFINITIONS[type] ?? ERROR_DEFINITIONS['unknown'];
    this.currentError.set(definition);
  }

  parseN8nError(response: any): ErrorType | null {
    if (response && typeof response.error === 'string') {
      const knownTypes: ErrorType[] = ['connection', 'rate_limit', 'validation', 'unknown', 'wrong_ingredients'];
      const type = response.error as ErrorType;
      return knownTypes.includes(type) ? type : 'unknown';
    }
    return null;
  }

  clearError(): void {
    this.currentError.set(null);
  }
}
