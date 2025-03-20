import {Component, computed, effect, inject, signal} from '@angular/core';
import {LESSONS_CONFIG} from '../../lib/core/lessons/lessons.config';
import {LessonsService} from '../../lib/core/services/lessons.service';

@Component({
  selector: 'app-layout-header',
  imports: [],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss'
})
export class LayoutHeaderComponent {
  public readonly lessonsService = inject(LessonsService);
  public $currentLevel$ = computed(() =>{
    return this.lessonsService.currentLevel
  })

  public $lessonLength$ = computed(() =>{
    return this.lessonsService.lessonLength
  })

  changeLevel(direction: 'prev' | 'next') {
    this.lessonsService.changeLevel(direction);
    console.log('test')
  }

}
