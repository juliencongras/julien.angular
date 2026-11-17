import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeteoServiceModelExercice } from './meteo-service-model-exercice';

describe('MeteoServiceModelExercice', () => {
  let component: MeteoServiceModelExercice;
  let fixture: ComponentFixture<MeteoServiceModelExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteoServiceModelExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(MeteoServiceModelExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
