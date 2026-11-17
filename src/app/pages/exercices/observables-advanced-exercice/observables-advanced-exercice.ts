import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  imports: [FormsModule],
  selector: 'app-observables-advanced-exercice',
  templateUrl: './observables-advanced-exercice.html',
})
export class ObservablesAdvancedExercice {
  title: string = "Observables advanced";

  numbers : { value: number; label: string }[] = [];
  private subscription: Subscription | null = null;
  filterEven: boolean = true;
}
