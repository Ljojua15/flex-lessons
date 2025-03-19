import { Component } from '@angular/core';
import {ExampleComponent} from './example/example.component';
import {CodingComponent} from './coding/coding.component';

@Component({
  selector: 'app-task-place',
  imports: [
    ExampleComponent,
    CodingComponent
  ],
  templateUrl: './task-place.component.html',
  styleUrl: './task-place.component.scss'
})
export class TaskPlaceComponent {

}
