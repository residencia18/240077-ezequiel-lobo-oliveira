import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoManejoComponent } from './historico-manejo.component';

describe('HistoricoManejoComponent', () => {
  let component: HistoricoManejoComponent;
  let fixture: ComponentFixture<HistoricoManejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoManejoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoManejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
