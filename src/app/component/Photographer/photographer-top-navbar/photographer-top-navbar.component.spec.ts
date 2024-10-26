import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerTopNavbarComponent } from './photographer-top-navbar.component';

describe('PhotographerTopNavbarComponent', () => {
  let component: PhotographerTopNavbarComponent;
  let fixture: ComponentFixture<PhotographerTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerTopNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotographerTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
