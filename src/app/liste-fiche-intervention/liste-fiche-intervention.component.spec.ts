import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFicheInterventionComponent } from './liste-fiche-intervention.component';

describe('ListeFicheInterventionComponent', () => {
  let component: ListeFicheInterventionComponent;
  let fixture: ComponentFixture<ListeFicheInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFicheInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFicheInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
