import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduvationShootComponent } from './graduvation-shoot.component';

describe('GraduvationShootComponent', () => {
  let component: GraduvationShootComponent;
  let fixture: ComponentFixture<GraduvationShootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduvationShootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduvationShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
