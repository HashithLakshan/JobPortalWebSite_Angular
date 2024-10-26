import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navibar1Component } from './navibar1.component';

describe('Navibar1Component', () => {
  let component: Navibar1Component;
  let fixture: ComponentFixture<Navibar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navibar1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navibar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
