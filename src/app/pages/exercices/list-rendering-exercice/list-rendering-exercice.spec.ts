import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRenderingExercice } from './list-rendering-exercice';

describe('ListRenderingExercice', () => {
  let component: ListRenderingExercice;
  let fixture: ComponentFixture<ListRenderingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRenderingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRenderingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
