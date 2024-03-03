import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAtendimentoComponent } from './detalhamento-atendimento.component';

describe('DetalhamentoAtendimentoComponent', () => {
  let component: DetalheAtendimentoComponent;
  let fixture: ComponentFixture<DetalheAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
