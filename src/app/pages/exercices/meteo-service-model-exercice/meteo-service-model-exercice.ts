import { Component, inject, signal } from '@angular/core';
import { Meteo } from '../../../services/meteo/meteo';
import { MeteoResponse } from '../../../models/meteo.model';

@Component({
  imports: [],
  selector: 'app-meteo-service-model-exercice',
  templateUrl: './meteo-service-model-exercice.html',
})
export class MeteoServiceModelExercice {
  private readonly meteoService = inject(Meteo)

  meteoSignal = signal<MeteoResponse | null>;
  isLoading = signal<boolean>;
  errorMessage = signal<string | null>;
}
