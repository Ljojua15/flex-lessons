import {Injectable, signal} from '@angular/core';
import {LESSONS_CONFIG} from '../lessons/lessons.config';
import {single} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessonsConfig:any = LESSONS_CONFIG;

  currentLevel = signal<number>(1);


  get currentLesson():any {
    return this.lessonsConfig[this.currentLevel()];
  }

  changeLevel(direction: 'prev' | 'next') {
    const newLevel =
      direction === 'next' ? this.currentLevel() + 1 : this.currentLevel() - 1;
    console.log(newLevel);
    if (newLevel >= 1 && newLevel <= 24) {
      this.currentLevel.set(newLevel);
    }
  }
}
