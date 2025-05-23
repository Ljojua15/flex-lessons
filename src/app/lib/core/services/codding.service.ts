import {effect, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {LessonsService} from './lessons.service';

@Injectable({
  providedIn: 'root'
})
export class CoddingService {
  public lessonsService = inject(LessonsService);
  public $myCode$ = signal<string | null>(' ');

  public $answers$ = this.lessonsService.answers

  public isCodeCorrect():WritableSignal<boolean> {
    const myCode = this.normalizeStyles(this.$myCode$());
    const answers = this.$answers$();

    return signal(answers.some((answerObj: { [key: string]: unknown }) => {
      const answerString = this.normalizeStyles(this.convertJsonToCssString(answerObj));
      return myCode === answerString;
    }))
  }

  private normalizeStyles(styleString: string | null): string {
    if (!styleString) return '';

    return styleString
      .split(';')
      .map(rule => rule.trim())
      .filter(rule => rule.includes(':'))
      .map(rule => {
        let [key, value] = rule.split(':').map(part => part.trim());
        return `${this.convertToKebabCase(key)}: ${value}`;
      })
      .sort()
      .join('; ');
  }

  private convertToKebabCase(str: string): string {
    return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  }

  private convertJsonToCssString(json: any): string {
    return Object.entries(json)
      .map(([key, value]) => `${this.convertToKebabCase(key)}: ${value}`)
      .sort()
      .join('; ');
  }

  public enterMyCode(direction:'done'){
    if(this.isCodeCorrect()()){
      const rightAnswer = direction === 'done' ? this.lessonsService.currentLevel() + 1 : this.lessonsService.currentLevel();
      this.lessonsService.currentLevel.set(rightAnswer);
      this.lessonsService.resetCodeControl()
    }
  }

}
