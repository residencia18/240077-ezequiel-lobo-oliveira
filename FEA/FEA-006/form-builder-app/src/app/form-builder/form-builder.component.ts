import { Component, OnInit } from '@angular/core';
import { ApiService } from '../form-api.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  formData: any[] = []; // Inicializando a propriedade formData com um array vazio

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFirstCountryData().subscribe(data => {
      this.formData = this.apiService.transformDataToFormFields(data);
    });
  }
}
