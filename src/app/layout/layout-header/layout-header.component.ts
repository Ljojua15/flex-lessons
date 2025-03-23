import {Component, computed, effect, inject, signal} from '@angular/core';
import {LESSONS_CONFIG} from '../../lib/core/lessons/lessons.config';
import {LessonsService} from '../../lib/core/services/lessons.service';
import {CommonModule} from '@angular/common';
import {LevelPopupComponent} from './level-popup/level-popup.component';

@Component({
  selector: 'app-layout-header',
  imports: [CommonModule, LevelPopupComponent],
  templateUrl: './layout-header.component.html',
  styleUrl: './layout-header.component.scss'
})
export class LayoutHeaderComponent {
  public readonly lessonsService = inject(LessonsService);
  public $currentLevel$ = computed(() =>{
    return this.lessonsService.currentLevel
  })

  public readonly isLevelOpen = signal<boolean>(false);

  public $lessonLength$ = computed(() =>{
    console.log(this.lessonsService.lessonLength)
    return this.lessonsService.lessonLength
  })

  public changeLevel(direction: 'prev' | 'next') {
    this.lessonsService.changeLevel(direction);
    this.lessonsService.resetCodeControl();
  }

  public openLevelPopup(){
    this.isLevelOpen.update((prev) => !prev);
  }

}
