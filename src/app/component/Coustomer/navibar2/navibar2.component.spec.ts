import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navibar2Component } from './navibar2.component';

describe('Navibar2Component', () => {
  let component: Navibar2Component;
  let fixture: ComponentFixture<Navibar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navibar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navibar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
