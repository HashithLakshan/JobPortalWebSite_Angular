import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersFeedbacksComponent } from './photographers-feedbacks.component';

describe('PhotographersFeedbacksComponent', () => {
  let component: PhotographersFeedbacksComponent;
  let fixture: ComponentFixture<PhotographersFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographersFeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographersFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
