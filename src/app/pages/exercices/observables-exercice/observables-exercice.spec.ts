import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesExercice } from './observables-exercice';

describe('ObservablesExercice', () => {
  let component: ObservablesExercice;
  let fixture: ComponentFixture<ObservablesExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
