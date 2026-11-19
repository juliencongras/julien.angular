import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentCommunicationExercice } from './component-communication-exercice';

describe('ComponentCommunicationExercice', () => {
  let component: ComponentCommunicationExercice;
  let fixture: ComponentFixture<ComponentCommunicationExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCommunicationExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCommunicationExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
