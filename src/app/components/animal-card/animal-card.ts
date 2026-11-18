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
    animal = input.required<Animal>();

    adoptStatusChange = output<number>();
    energyLevelChange = output<number>();

    toggleAdoptStatus(): void {
        this.adoptStatusChange.emit(this.animal().id)
    }
    changeEnergyLevel(energyAmount: number): void {
        this.energyLevelChange.emit(this.animal().id);
    }
}
