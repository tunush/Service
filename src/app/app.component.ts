import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animals = [
    {
      name: "Енот",
      isSold: false
    },
    {
      name: "Хомяк",
      isSold: false
    },
    {
      name: "Попугай",
      isSold: false
    }
  ]
  
  addAnimalInList(animalName:string) {
    this.animals.push({
      name: animalName,
      isSold: false
    });
  }
}
