import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Friend {
  friendName: string;
  friendAge: number;
  friendStatus: string;
  friendBio: string;
  friendImgUrl: string;
  getOneFriendStatus: () => string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-two-way-databinding-exercice',
  templateUrl: './two-way-databinding-exercice.html',
})
export class TwoWayDatabindingExercice {
  title: string = "Two way databinding";

  oneFriend: Friend = {
    friendName: "Bob",
    friendAge: 27,
    friendStatus: "Online",
    friendBio: "A friend called Bob.",
    friendImgUrl: "https://picsum.photos/200",
    getOneFriendStatus(): string {
      return this.friendStatus;
    }
  }
}
