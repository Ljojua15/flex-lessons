import {Component, effect, inject, signal} from '@angular/core';
import {CoddingService} from '../../../lib/core/services/codding.service';
import {CommonModule, NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-result-place',
  imports: [
    NgStyle
  ],
  templateUrl: './result-place.component.html',
  styleUrl: './result-place.component.scss'
})
export class ResultPlaceComponent {
  public readonly coddingService = inject(CoddingService)
  public writtenCode!: string

  constructor() {
    effect(() => {
      const code = this.coddingService.$myCode$();
      if (code !== null) {
        this.writtenCode = code;
      }
    });
  }

  parseStyle(styleString: string): { [key: string]: string } {
    return styleString
      .split(';')
      .filter(rule => rule.includes(': '))
      .reduce((styleObj: any, rule) => {
        const [key, value] = rule.split(': ');
        styleObj[key.trim()] = value.trim();
        return styleObj;
      }, {});
  }


}
