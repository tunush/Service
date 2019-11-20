import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent {
  @Output() onAddAnimal = new EventEmitter<String>();
  animalName = "";

  addAnimal() {
    this.onAddAnimal.emit(this.animalName);
    this.animalName = "";
  }
}
