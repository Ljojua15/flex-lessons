import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPlaceComponent } from './result-place.component';

describe('ResultPlaceComponent', () => {
  let component: ResultPlaceComponent;
  let fixture: ComponentFixture<ResultPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
