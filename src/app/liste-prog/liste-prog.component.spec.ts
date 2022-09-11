import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProgComponent } from './liste-prog.component';

describe('ListeProgComponent', () => {
  let component: ListeProgComponent;
  let fixture: ComponentFixture<ListeProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
