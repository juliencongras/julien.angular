import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-meteo-service-model-exercice',
  templateUrl: './meteo-service-model-exercice.html',
})
export class MeteoServiceModelExercice {
  //private readonly meteoService = inject(MeteoService)

  meteoSignal = signal<MeteoResponse | null>;
  isLoading = signal<boolean>;
  errorMessage = signal<string | null>;
}
