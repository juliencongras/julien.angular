import { Component } from '@angular/core';

interface Friend {
  id: number,
  name: string,
  age: number,
  status: boolean,
  bio: string,
  imgurl: string
}

@Component({
  imports: [],
  selector: 'app-property-binding-exercice',
  styleUrl: './property-binding-exercice.css',
  templateUrl: './property-binding-exercice.html',
})
export class PropertyBindingExercice {
  title: string = "Exercice : Property binding";
  
  oneFriend: Friend = {
    id: 0,
    name: "Steven Cigale",
    age: 25,
    status: false,
    bio: "Steven Cigale is a french film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.",
    imgurl: "https://picsum.photos/300/200"
  }

  getOneFriendStatus(): boolean {
    return this.oneFriend.status;
  }
}
