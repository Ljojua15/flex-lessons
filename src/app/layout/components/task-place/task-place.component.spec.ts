import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlaceComponent } from './task-place.component';

describe('TaskPlaceComponent', () => {
  let component: TaskPlaceComponent;
  let fixture: ComponentFixture<TaskPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
