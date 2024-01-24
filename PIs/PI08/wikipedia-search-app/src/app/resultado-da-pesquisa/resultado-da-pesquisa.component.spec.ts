import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDaPesquisaComponent } from './resultado-da-pesquisa.component';

describe('ResultadoDaPesquisaComponent', () => {
  let component: ResultadoDaPesquisaComponent;
  let fixture: ComponentFixture<ResultadoDaPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoDaPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadoDaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
