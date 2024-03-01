
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^\S{1,12}$/)]],
     
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log(formData); 
    }
  }
}
