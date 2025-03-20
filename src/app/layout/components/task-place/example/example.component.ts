import {Component, computed, effect, inject, signal} from '@angular/core';
import {LessonsService} from '../../../../lib/core/services/lessons.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'flex-lesson-example',
  imports: [CommonModule,FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
   public lessonsService = inject(LessonsService);
   public $changedText$ =  computed(() => {
     return this.lessonsService.currentLesson?.texts
   })
}
