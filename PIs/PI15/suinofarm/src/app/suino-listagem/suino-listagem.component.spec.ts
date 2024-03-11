import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuinoListagemComponent } from './suino-listagem.component';

describe('SuinoListagemComponent', () => {
  let component: SuinoListagemComponent;
  let fixture: ComponentFixture<SuinoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuinoListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuinoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
