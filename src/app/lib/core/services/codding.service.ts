import {effect, inject, Injectable, signal} from '@angular/core';
import {LessonsService} from './lessons.service';

@Injectable({
  providedIn: 'root'
})
export class CoddingService {
  public lessonsService = inject(LessonsService);
  public $myCode$ = signal<string | null>(' ');

  public $answers$ = this.lessonsService.answers

  constructor() {
    effect(() => {

      if (this.isCodeCorrect()) {
        console.log('true');
      } else {
        console.log('false');
      }
    });
  }

  private isCodeCorrect(): boolean {
    const myCode = this.normalizeStyles(this.$myCode$());
    const answers = this.$answers$();

    return answers.some((answerObj: { [key: string]: unknown }) => {
      // Normalize answer object to a string
      const answerString = this.normalizeStyles(this.convertJsonToCssString(answerObj));
      console.log(answerString, 'Answer String');
      console.log(myCode, 'My Code');
      return myCode === answerString;
    });
  }

  private normalizeStyles(styleString: string | null): string {
    if (!styleString) return '';

    return styleString
      .split(';')  // Split by semicolon to get individual key-value pairs
      .map(rule => rule.trim())  // Remove any extra spaces
      .filter(rule => rule.includes(':'))  // Keep only valid key-value pairs
      .map(rule => {
        let [key, value] = rule.split(':').map(part => part.trim());
        return `${this.convertToKebabCase(key)}: ${value}`;  // Convert to kebab-case
      })
      .sort()  // Sort properties alphabetically
      .join('; ');  // Rejoin into a single string
  }

  private convertToKebabCase(str: string): string {
    return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  }

  private convertJsonToCssString(json: any): string {
    return Object.entries(json)
      .map(([key, value]) => `${this.convertToKebabCase(key)}: ${value}`)
      .sort()  // Sort properties alphabetically
      .join('; ');  // Join into a single string
  }

}
