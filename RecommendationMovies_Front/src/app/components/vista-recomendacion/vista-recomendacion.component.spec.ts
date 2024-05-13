import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRecomendacionComponent } from './vista-recomendacion.component';

describe('VistaRecomendacionComponent', () => {
  let component: VistaRecomendacionComponent;
  let fixture: ComponentFixture<VistaRecomendacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaRecomendacionComponent]
    });
    fixture = TestBed.createComponent(VistaRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
