import { Component, Input } from '@angular/core';
import { ConsoleService } from '../console.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  providers: [ConsoleService]
})
export class AnimalComponent {
  @Input() animal;

  constructor(private consoleService: ConsoleService) {}

  getClass() {
    return {
      'list-group-item-danger': this.animal.isSold,
      'list-group-item-success': !this.animal.isSold,
      'list-group-item': true
    }
  }

  onEvent(type: string) {
    this.animal.isSold = type == "buy" ? true : false;
    this.consoleService.log(this.animal.name + " status " + this.animal.isSold);
  }
}
