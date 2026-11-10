import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-conditional-rendering-exercice',
  templateUrl: './conditional-rendering-exercice.html',
})
export class ConditionalRenderingExercice {
  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }
  title: string = "List Friends (Conditional rendering)"

  listFriendsInputText: string = "";
  listFriendsAuth: boolean = false;

  onAddingFriends(): void {
    this.listFriendsAuth = true
  }
}
