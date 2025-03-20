import {Component, computed, inject, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoddingService} from '../../../../lib/core/services/codding.service';
import {debounceTime} from 'rxjs';
import {LessonsService} from '../../../../lib/core/services/lessons.service';

@Component({
  selector: 'flex-lesson-coding',
  imports: [FormsModule,   ReactiveFormsModule],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.scss'
})
export class CodingComponent{
  private readonly coddingService = inject(CoddingService);
  private readonly lessonsService = inject(LessonsService)

  public  code = new FormControl('');


  ngOnInit(){
    this.code.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.coddingService.$myCode$.set(this.code.value);
    });
  }



}
