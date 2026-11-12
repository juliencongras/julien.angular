import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface OneFriend {
  oneFriendId: number,
  oneFriendName: string,
  oneFriendAge: number,
  oneFriendStatus: string,
  oneFriendBio: string,
  oneFriendImgUrl: string,
  getOneFriendStatus: () => string
}

@Component({
  imports: [NgClass, NgStyle, FormsModule],
  selector: 'app-dynamic-styling-exercice',
  styleUrl: './dynamic-styling-exercice.css',
  templateUrl: './dynamic-styling-exercice.html',
})
export class DynamicStylingExercice {  
  title: string = "Exercice Dynamic Styling";

  friendBob: OneFriend = {
    oneFriendId: Math.random(),
    oneFriendName: "Bob",
    oneFriendAge: 25,
    oneFriendStatus: "Offline",
    oneFriendBio: "My friend Bob",
    oneFriendImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wLqFQwr-F47wZkfBy5Je6qTjaPXGZDjjLr3pX8e-H2KybgZ2oWqEIZWxETkkMgLFm0O7NV0FgWMqkiBTT4FEhRLDRdPoPKFR0keKcXs&s=10",
    getOneFriendStatus(): string {
      return this.oneFriendStatus;
    }
  }
}
