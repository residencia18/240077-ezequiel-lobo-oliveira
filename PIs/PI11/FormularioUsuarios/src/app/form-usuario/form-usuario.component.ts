import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  form: FormGroup;

  generos = ['Masculino', 'Feminino', 'Outro'];
  profissoes = ['Engenheiro', 'Professor', 'Médico', 'Advogado'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeUsuario: ['', [Validators.required, Validators.maxLength(12), this.noSpacesValidator]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)]],
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: ['', [Validators.required, this.fullNameValidator]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s?\d{4,5}\-\d{4}$/)]],
      endereco: ['', Validators.required],
      dataNascimento: ['', [Validators.required, this.minimumAgeValidator]],
      genero: ['', Validators.required],
      profissao: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log(this.form.value); 
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }

  noSpacesValidator(control) {
    if (control.value && control.value.trim().indexOf(' ') !== -1) {
      return { noSpaces: true };
    }
    return null;
  }

  fullNameValidator(control) {
    const fullName = control.value;
    if (fullName && fullName.trim().split(' ').length < 2) {
      return { fullName: true };
    }
    return null;
  }

  minimumAgeValidator(control) {
    const birthDate = new Date(control.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18) {
      return { minimumAge: true };
    }
    return null;
  }
}
