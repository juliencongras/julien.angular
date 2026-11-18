import { Component, input, output, signal } from '@angular/core';
import { Animal, AnimalCard} from '../../../components/animal-card/animal-card';

@Component({
  imports: [AnimalCard],
  selector: 'app-animal-input-exercice',
  templateUrl: './animal-input-exercice.html',
})
export class AnimalInput {
    title: string = "Refuge Interactif - Input & Output";

    readonly animals = signal<Animal[]>([
        { id: 1, name: 'Rex', species: 'chien', age: 3, energyLevel: 85, isAdopted: false },
        { id: 2, name: 'Pixel', species: 'chat', age: 2, energyLevel: 45, isAdopted: true },
        { id: 3, name: 'Noisette', species: 'lapin', age: 1, energyLevel: 30, isAdopted: false },
        { id: 4, name: 'Kiwi', species: 'oiseau', age: 4, energyLevel: 70, isAdopted: false },
        { id: 5, name: 'Luna', species: 'chat', age: 6, energyLevel: 20, isAdopted: false },
        { id: 6, name: 'Oslo', species: 'chien', age: 1, energyLevel: 95, isAdopted: true },
    ]);

    handleToggleAdoptStatus(animalId: number): void {
        console.log("AnimalId : ",animalId);
        this.animals.update((list) =>
            list.map((a) => (a.id === animalId ? { ...a, isAdopted: !a.isAdopted } : a))
        );
    }

    handleChangeEnergyLevel(animalId: number): void {
        console.log("AnimalId : ",animalId);
    }
}

