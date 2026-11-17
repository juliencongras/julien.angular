import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteoResponse } from '../../models/meteo.model';

@Service()
export class Meteo {
    http = inject(HttpClient);

    api: string = "https://prevision-meteo.ch/services/json/";

    api_response: MeteoResponse;

    getMeteoByCity(city: string): Observable<MeteoResponse>{
        this.http.get<any>(this.api + city).subscribe({
          next: (response) => {
            // Exécuté en cas de succès (statut HTTP 2xx)
            console.log(response);
          },
          error: (err: HttpErrorResponse) => {
            // Exécuté en cas d'erreur réseau ou serveur (4xx, 5xx)
            
            if (err.status === 0) {
              // Erreur côté client ou problème réseau

            } else {
              // Erreur renvoyée par le backend

            }
            console.error('Détails de l’erreur :', err);
          },
          complete: () => {
            // Optionnel : exécuté une fois la requête terminée (uniquement si pas d'erreur)
            console.log('Requête HTTP terminée.');
          }
        });
        return this.api_response;
    }

}
