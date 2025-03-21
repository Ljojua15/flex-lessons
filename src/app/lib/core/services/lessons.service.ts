import {computed, Injectable, signal} from '@angular/core';
import {LESSONS_CONFIG} from '../lessons/lessons.config';
import {single} from 'rxjs';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessonsConfig:any = LESSONS_CONFIG;
  public codeControl = signal<FormControl>(new FormControl(''));
  currentLevel = signal<number>(1);

  public lessonLength:number = Object.keys(LESSONS_CONFIG).length;

  get currentLesson():any {
    return this.lessonsConfig[this.currentLevel()];
  }

  public answers = computed(() =>{
    return this.currentLesson?.answers || [];
  })

  public movingDivs = computed(() => {
    return this.currentLesson?.movingDivs || []
  })

  public targetDivs = computed(() => {
    return this.currentLesson?.targetDivs || [];
  });

  public targetDivsStyle = computed(() => {
    return this.currentLesson?.targetDivsStyle?.[0] || {};
  });

  public codePlace = computed(() => this.currentLesson?.codePlace || []);

  resetCodeControl() {
    this.codeControl().setValue('');
  }

  changeLevel(direction: 'prev' | 'next') {
    const newLevel =
      direction === 'next' ? this.currentLevel() + 1 : this.currentLevel() - 1;
    if (newLevel >= 1 && newLevel <= this.lessonLength) {
      this.currentLevel.set(newLevel);
    }
  }
}
