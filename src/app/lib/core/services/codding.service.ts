import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoddingService {
  public $myCode$ = signal<string | null>(' ');
}
