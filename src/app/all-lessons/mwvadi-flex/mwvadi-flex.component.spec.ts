import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwvadiFlexComponent } from './mwvadi-flex.component';

describe('MwvadiFlexComponent', () => {
  let component: MwvadiFlexComponent;
  let fixture: ComponentFixture<MwvadiFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MwvadiFlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwvadiFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
