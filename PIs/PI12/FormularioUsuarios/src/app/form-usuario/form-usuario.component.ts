import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormInteractionService } from '../form-interaction.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  public genderOptions = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outro', value: 'O' }
  ];

  public professionOptions = [
    { label: 'Artista', value: 'artista' },
    { label: 'Consultor(a) Financeiro(a)', value: 'consultor' },
    { label: 'Desenvolvedor(a) de Software', value: 'desenvolvedor' },
    { label: 'Médico(a)', value: 'medico' },
    { label: 'Arquiteto(a)', value: 'arquiteto' },
    { label: 'Dentista', value: 'dentista' },
    { label: 'Contador(a)', value: 'contador' },
    { label: 'Psicólogo(a)', value: 'psicologo' },
    { label: 'Professor(a)', value: 'professor' },
    { label: 'Enfermeiro(a)', value: 'enfermeiro' },
    { label: 'Piloto(a)', value: 'piloto' },
    { label: 'Chef de Cozinha', value: 'chef' },
    { label: 'Farmacêutico(a)', value: 'farmaceutico' },
    { label: 'Atleta', value: 'atleta' },
    { label: 'Advogado(a)', value: 'advogado' },
    { label: 'Designer Gráfico(a)', value: 'designer' },
    { label: 'Engenheiro(a)', value: 'engenheiro' },
  ];

  public userForm = new FormGroup({
    "userName": new FormControl(null, [Validators.required, this.validUsername()]),
    "password": new FormControl(null, [Validators.required, this.validPassword()]),
    "fullName": new FormControl(null, [Validators.required, this.validName()]),
    "email": new FormControl(null, [Validators.required, this.validMail()]),
    "phoneNumber": new FormControl(null, [Validators.required, this.validPhone()]),
    "address": new FormControl(null, [Validators.required]),
    "birthDate": new FormControl(null, [Validators.required, this.validDate()]),
    "gender": new FormControl(null, [Validators.required, this.validGender()]),
    "profession": new FormControl(null, [Validators.required, this.validProfession()]),
  });

  // Lista de logs
  public formLog: any[] = [];

  constructor(private formInteractionService: FormInteractionService) {}

  submitForm() {
    if (this.userForm.valid) {
      this.formInteractionService.addEvent(this.userForm.value);
      this.userForm.reset();
    }
  }

  validUsername(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      if (!/[a-zA-Z0-9]/.test(value)) {
        errors = { ...errors, 'specialCharacters': { "status": true, "message": "Nome de usuário deve conter apenas letras e números" } };
      }

      if (value.length > 12) {
        errors = { ...errors, 'maxLength': { "status": false, "message": "Nome de usuário deve ter no máximo 12 caracteres" } };
      }

      if (value.includes(" ")) {
        errors = { ...errors, 'haveWhiteSpaces': { "status": true, "message": "Nome de usuário não deve conter espaços" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }

  validPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      if (value.length < 4) {
        errors = { ...errors, 'minLength': { "status": false, "message": "Senha deve ter pelo menos 4 caracteres" } };
      }

      if (!(/[A-Z]/g.test(value))) {
        errors = { ...errors, 'haveUppercase': { "status": false, "message": "Deve conter pelo menos uma letra maiúscula" } };
      }

      if (!(/[^a-zA-Z0-9]/g.test(value))) {
        errors = { ...errors, 'haveSymbol': { "status": false, "message": "Deve conter pelo menos um caractere especial" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }

  validName(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      if (value.split(" ").filter((e: string) => e).length <= 1) {
        errors = { ...errors, 'haveSurname': { "status": false, "message": "Deve conter pelo menos um sobrenome" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }

  validMail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const regexMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const value = control.value || "";

      if (!(regexMail.test(value))) {
        errors = { ...errors, 'validMail': { "status": false, "message": "Email inválido" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }

  validPhone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      if (!(/\([0-9]{2}\) 9[0-9]{4}-[0-9]{4}/.test(value))) {
        errors = { ...errors, 'validNumber': { "status": false, "message": "Número de telefone inválido" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }

  validDate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      let date = new Date(value);

      if (isNaN(date.getTime())) {
        errors = { ...errors, 'validDate': { "status": false, "message": "Data inválida" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }
  

  validGender(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      if (!this.genderOptions.map(opt => opt.value).includes(value)) {
        errors = { ...errors, 'validGender': { "status": false, "message": "Selecione um gênero da lista" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }

  validProfession(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let errors = {};
      const value = control.value || "";

      if (!this.professionOptions.map(opt => opt.value).includes(value)) {
        errors = { ...errors, 'validProfession': { "status": false, "message": "Selecione uma profissão da lista" } };
      }

      if (Object.keys(errors).length > 0) {
        return errors;
      }

      return null;
    }
  }
}
