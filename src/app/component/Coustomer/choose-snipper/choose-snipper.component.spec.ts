import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSnipperComponent } from './choose-snipper.component';

describe('ChooseSnipperComponent', () => {
  let component: ChooseSnipperComponent;
  let fixture: ComponentFixture<ChooseSnipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseSnipperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseSnipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
