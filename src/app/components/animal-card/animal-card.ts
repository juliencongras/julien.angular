import { Component, input, output } from '@angular/core';

export interface Animal {
  id: number,
  name: string,
  species: string,
  age: number,
  energyLevel: number,
  isAdopted: boolean
}

@Component({
  imports: [],
  selector: 'app-animal-card',
  templateUrl: './animal-card.html',
})
export class AnimalCard {
    // 📥 Entrée de données (Property Binding [user]="...")
  //user = input.required<UserProfile>();

  // 📤 Sortie d'événement (Event Binding (statusChange)="..." )
  //statusChange = output<number>();

  toggleStatus(): void {
    // Émission de l'ID vers le composant Parent
    //this.statusChange.emit(this.user().id);
  }
}
