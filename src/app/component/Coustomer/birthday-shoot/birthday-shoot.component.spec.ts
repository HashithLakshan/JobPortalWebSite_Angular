import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayShootComponent } from './birthday-shoot.component';

describe('BirthdayShootComponent', () => {
  let component: BirthdayShootComponent;
  let fixture: ComponentFixture<BirthdayShootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayShootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
