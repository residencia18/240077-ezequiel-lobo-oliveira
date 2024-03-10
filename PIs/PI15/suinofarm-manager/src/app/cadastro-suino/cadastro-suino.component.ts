import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrls: ['./cadastro-suino.component.css']
})
export class CadastroSuinoComponent implements OnInit {
  suinoForm: FormGroup;

  constructor(private fb: FormBuilder, private backendService: BackendService) { }

  ngOnInit(): void {
    this.suinoForm = this.fb.group({
      brinco: ['', Validators.required],
      // Outros campos e validadores aqui
    });
  }

  cadastrarSuino() {
    if (this.suinoForm.valid) {
      // Enviar dados para o backend
      this.backendService.cadastrarSuino(this.suinoForm.value).subscribe(response => {
        // Lógica de resposta do backend
      });
    } else {
      // Exibir mensagem de erro ao usuário
    }
  }
}
