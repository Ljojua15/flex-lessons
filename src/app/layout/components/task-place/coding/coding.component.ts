import {Component, computed, effect, EventEmitter, inject, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoddingService} from '../../../../lib/core/services/codding.service';
import {debounceTime} from 'rxjs';
import {LessonsService} from '../../../../lib/core/services/lessons.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'flex-lesson-coding',
  imports: [FormsModule,   ReactiveFormsModule,CommonModule,],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.scss'
})
export class CodingComponent{
  @Output() resetTextareaEvent = new EventEmitter<void>();

  public readonly coddingService = inject(CoddingService);
  private readonly lessonsService = inject(LessonsService)

  public $code$ = this.lessonsService.codeControl;
  //
  public $isCorrect$ = computed(() => {
    return this.coddingService.isCodeCorrect()
  })



  ngOnInit(){
    this.$code$().valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.coddingService.$myCode$.set(this.$code$().value);
    });
  }

  public $codePlace$ = this.lessonsService.codePlace;



  public enterCode(direction: 'next'){

  }


}
