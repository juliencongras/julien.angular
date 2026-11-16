import { Component, signal, computed, effect } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observables-exercice',
  templateUrl: './observables-exercice.html',
})
export class ObservablesExercice {
  title: string = "Observables (simple)";

  numbers = signal<number[]>([]);
  paused = signal<boolean>(false);
  private subscription: Subscription | null = null

  start(): void {
    if(!this.subscription){
      this.subscription = interval(1000).subscribe({
        //this.numbers.update(Math.floor(Math.random() * 100) + 1)
      });
    }
  }

  pauseResume(): void{
    this.paused.update((isPaused) => !isPaused)

    if(this.paused()){
      
    }
  }
}
