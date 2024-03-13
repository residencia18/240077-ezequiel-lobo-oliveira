import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuinoCadastroComponent } from './suino-cadastro.component';

describe('SuinoCadastroComponent', () => {
  let component: SuinoCadastroComponent;
  let fixture: ComponentFixture<SuinoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuinoCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuinoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
