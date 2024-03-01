import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  userForm: FormGroup;

  generoOptions: string[] = ['Masculino', 'Feminino', 'Outro'];
  profissaoOptions: string[] = ['Engenheiro', 'Professor', 'Médico', 'Advogado', 'Outro'];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^\S{1,12}$/)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/)]],
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: ['', Validators.required],
      telefone: ['', Validators.pattern(/^\d{10,11}$/)],
      endereco: ['', Validators.required],
      dataNascimento: ['', [Validators.required, this.validarIdadeMinima(18)]],
      genero: ['', Validators.required],
      profissao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validarIdadeMinima(minAge: number) {
    return (control: AbstractControl) => {
      if (control.value) {
        const birthday = new Date(control.value);
        const age = new Date().getFullYear() - birthday.getFullYear();
        return age >= minAge ? null : { idadeMinima: true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(formData);
    }
  }
}
