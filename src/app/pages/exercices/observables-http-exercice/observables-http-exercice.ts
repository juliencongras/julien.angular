import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, computed, effect } from '@angular/core';

interface Digimon {
  id: number,
  name: string,
  href: string,
  image: string
}

interface DigimonResponse{
  currentPage: number,
  elementsOnPage: number,
  totalElements: number,
  totalPages: number,
  previousPage: string,
  nextPage: string
}

@Component({
  imports: [],
  selector: 'app-observables-http-exercice',
  templateUrl: './observables-http-exercice.html',
})
export class ObservablesHttpExercice {
  title: string = "Observables (http)";

  httpClientInstance: HttpClient = inject(HttpClient);

  digimons = signal<Digimon[]>([]);
  isLoading = signal<Boolean>(true);
  errorMessage = signal<string | null>(null);

  ngOnInit(){
    this.httpClientInstance.get<DigimonResponse>('[https://digi-api.com/api/v1/digimon](https://digi-api.com/api/v1/digimon)').subscribe({
      next(value) {
        //Put value in digimon array
        //this.isLoading = false
      },
      error(err) {
        
      },
    })
  }
}
