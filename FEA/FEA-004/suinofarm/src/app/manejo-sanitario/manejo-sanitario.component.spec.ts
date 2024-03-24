import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroManejoComponent } from './manejo-sanitario.component';

describe('ManejoSanitarioComponent', () => {
  let component: CadastroManejoComponent;
  let fixture: ComponentFixture<CadastroManejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroManejoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroManejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
