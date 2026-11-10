import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-conditional-rendering-exercice',
  templateUrl: './conditional-rendering-exercice.html',
})
export class ConditionalRenderingExercice {
  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }
  title: string = "List Friends (Conditional rendering))"

  listFriendsInputText: string = "";
  listFriendsAuth: boolean = false;
  listFriendsCreationStatus: string = "🥶 Aucun ami ...";

  onUpdateFriendsList(eventInput: Event): void {
    this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
  }

  onAddingFriends(): void {
    this.listFriendsCreationStatus = this.listFriendsInputText;
  }
}
