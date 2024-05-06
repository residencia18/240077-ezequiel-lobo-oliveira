import { AbstractControl, ValidatorFn } from '@angular/forms';

// Função do validador personalizado
export function uppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value || '';
    if (!/[A-Z]/.test(value)) {
      return { 'uppercase': true }; // Retorna um erro se não houver letra maiúscula
    }
    return null; // Retorna null se a validação passar
  };
}
