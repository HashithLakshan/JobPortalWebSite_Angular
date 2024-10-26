import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShootComponent } from './single-shoot.component';

describe('SingleShootComponent', () => {
  let component: SingleShootComponent;
  let fixture: ComponentFixture<SingleShootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleShootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
