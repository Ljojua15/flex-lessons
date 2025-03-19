import { Component } from '@angular/core';
import {TaskPlaceComponent} from '../components/task-place/task-place.component';

@Component({
  selector: 'app-layout-body',
  imports: [
    TaskPlaceComponent
  ],
  templateUrl: './layout-body.component.html',
  styleUrl: './layout-body.component.scss'
})
export class LayoutBodyComponent {

}
