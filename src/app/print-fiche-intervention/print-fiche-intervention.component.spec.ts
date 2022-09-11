import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintFicheInterventionComponent } from './print-fiche-intervention.component';

describe('PrintFicheInterventionComponent', () => {
  let component: PrintFicheInterventionComponent;
  let fixture: ComponentFixture<PrintFicheInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintFicheInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintFicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
