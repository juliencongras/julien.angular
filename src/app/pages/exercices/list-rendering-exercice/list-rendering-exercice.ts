import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Profile {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  isActive: boolean,
  role: string
}

@Component({
  imports: [FormsModule, NgFor],
  selector: 'app-list-rendering-exercice',
  templateUrl: './list-rendering-exercice.html',
})
export class ListRenderingExercice {
  title: string = "List rendering";

  inputNameFriend: string = "";

  userProfiles: Profile[] = [
    {
      id: 0,
      firstName: "Bob",
      lastName: "Bobson",
      email: "bob@bobson.com",
      isActive: false,
      role: "Admin"
    }
  ];

  addAFriend(): void {
    this.userProfiles.push(
      {
        id: Math.random(),
        firstName: this.inputNameFriend,
        lastName: "Bobson",
        email: "bob@bobson.com",
        isActive: true,
        role: "Moderator"
      }
    )
  }
}