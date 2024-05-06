import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuinoEdicaoComponent } from './suino-edicao.component';

describe('SuinoEdicaoComponent', () => {
  let component: SuinoEdicaoComponent;
  let fixture: ComponentFixture<SuinoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuinoEdicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuinoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
