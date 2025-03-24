import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutHeaderComponent} from './layout/layout-header/layout-header.component';
import {LayoutBodyComponent} from './layout/layout-body/layout-body.component';
import {LayoutFooterComponent} from './layout/layout-footer/layout-footer.component';
import {ResultPlaceComponent} from './layout/components/result-place/result-place.component';
import {KhinkaliFlexComponent} from './all-lessons/khinkali-flex/khinkali-flex.component';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'flex-lesson-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CSS FLEX GRID';
}
