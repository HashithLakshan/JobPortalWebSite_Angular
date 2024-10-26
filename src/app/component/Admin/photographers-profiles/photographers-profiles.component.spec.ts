import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographersProfilesComponent } from './photographers-profiles.component';

describe('PhotographersProfilesComponent', () => {
  let component: PhotographersProfilesComponent;
  let fixture: ComponentFixture<PhotographersProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographersProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographersProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
