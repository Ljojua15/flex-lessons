import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutHeaderComponent} from './layout/layout-header/layout-header.component';
import {LayoutBodyComponent} from './layout/layout-body/layout-body.component';
import {LayoutFooterComponent} from './layout/layout-footer/layout-footer.component';
import {ResultPlaceComponent} from './layout/components/result-place/result-place.component';

@Component({
  selector: 'flex-lesson-root',
  imports: [LayoutHeaderComponent, LayoutBodyComponent, LayoutFooterComponent, ResultPlaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flex-lessons';
}
