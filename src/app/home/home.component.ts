import { Component } from '@angular/core';

@Component({
  selector: 'flex-lesson-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 public open(){
   console.log('HomeComponent loaded.');
 }
}
