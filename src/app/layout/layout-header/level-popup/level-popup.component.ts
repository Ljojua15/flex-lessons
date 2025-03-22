import {Component, computed, effect, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LESSONS_CONFIG} from '../../../lib/core/lessons/lessons.config';
import {LessonsService} from '../../../lib/core/services/lessons.service';

@Component({
  selector: 'flex-lesson-level-popup',
  imports: [CommonModule],
  templateUrl: './level-popup.component.html',
  styleUrl: './level-popup.component.scss'
})
export class LevelPopupComponent {
  public readonly lessonsService = inject(LessonsService);
  public readonly idOfLessons: number[] = []

  constructor() {
    this.idOfLessons = Array.from({ length: this.lessonsService.lessonLength }, (_, i) => i+1);
    console.log(this.$activeItem$()())
  }

  public $activeItem$ = computed(() => {
    return this.lessonsService.currentLevel
  });

}
