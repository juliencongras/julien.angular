import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event-binding-exercice',
  templateUrl: './event-binding-exercice.html',
})
export class EventBindingExercice {
  constructor() {
    setTimeout(() => {
      this.listFriendsAuth = true;
    }, 3000);
  }
  title: string = "List Friends (Event Binding)"

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
