import {Component, computed, effect, inject, OnChanges, SimpleChanges} from '@angular/core';
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
  public readonly coddingService = inject(CoddingService);
  private readonly lessonsService = inject(LessonsService)

  public  code = new FormControl('');
  //
  public $isCorrect$ = computed(() => {
    return this.coddingService.isCodeCorrect()
  })

  constructor() {
    console.log(this.$isCorrect$()())
  }


  ngOnInit(){
    this.code.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.coddingService.$myCode$.set(this.code.value);
    });
  }

  public $codePlace$ = this.lessonsService.codePlace;

  public enterCode(){
    console.log('test')
  }


}
