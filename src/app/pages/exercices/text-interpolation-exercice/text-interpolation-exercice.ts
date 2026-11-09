import { Component } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  imports: [],
  selector: 'app-text-interpolation-exercice',
  styleUrl: './text-interpolation-exercice.css',
  templateUrl: './text-interpolation-exercice.html',
})
export class TextInterpolationExercice {
  title: string = "Exercice : Interpolation de texte";
  description: string = "Affichage de variables de différents types avec la syntaxe."

  maxScore: number = 20;
  currentScore: number = 15;
  
  user: User = {
    firstName: "Alexandre",
    lastName: "DUPONT",
    role: "Dev"
  }

  isLoggedIn: boolean = false;

  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  skills: string[] = ["Angular 22", "TypeScript", "DaisyUI"];
}
