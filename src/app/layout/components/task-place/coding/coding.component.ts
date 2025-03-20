import {Component, inject, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoddingService} from '../../../../lib/core/services/codding.service';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'flex-lesson-coding',
  imports: [FormsModule,   ReactiveFormsModule],
  templateUrl: './coding.component.html',
  styleUrl: './coding.component.scss'
})
export class CodingComponent{
  private readonly coddingService = inject(CoddingService)
  public  valueTest!: string
  name = new FormControl('');

  ngOnInit(){
    this.name.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
      this.coddingService.$myCode$.set(this.name.value);
    });
  }



}
