import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayDatabindingExercice } from './two-way-databinding-exercice';

describe('TwoWayDatabindingExercice', () => {
  let component: TwoWayDatabindingExercice;
  let fixture: ComponentFixture<TwoWayDatabindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDatabindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayDatabindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
