import { Component } from '@angular/core';
import {CARDS_CONFIG} from '../lib/core/lessons/cards.config';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'flex-lesson-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 public cards = CARDS_CONFIG
}
