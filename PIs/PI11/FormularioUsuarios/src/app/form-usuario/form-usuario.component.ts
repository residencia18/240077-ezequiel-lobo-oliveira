import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  form: FormGroup | undefined;

  generos = ['Masculino', 'Feminino', 'Outro'];
  profissoes = ['Engenheiro', 'Professor', 'Médico', 'Advogado']; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
     
    });
  }
}
