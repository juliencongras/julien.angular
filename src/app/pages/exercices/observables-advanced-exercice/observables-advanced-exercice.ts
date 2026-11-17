import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription, interval } from 'rxjs';

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
  paused: boolean = false;

  start(): void{
    if (!this.subscription) {
      this.subscription = interval(1000).subscribe(() => {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        if(this.filterEven && (randomNum % 2 !== 0)){
          return;
        }
        if(this.numbers.length > 10){
          this.numbers.shift();
        }
        this.numbers.push({ value: randomNum, label: randomNum > 50 ? 'Élevé' : 'Faible' });
      });
    }
  }

  pauseResume(): void {
    // Inversion de l'état du signal paused
    this.paused = !this.paused;

    if (this.paused) {
      this.subscription?.unsubscribe();
      this.subscription = null;
    } else {
      this.start();
    }
  }

  stop(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.numbers = [];
  }
}
