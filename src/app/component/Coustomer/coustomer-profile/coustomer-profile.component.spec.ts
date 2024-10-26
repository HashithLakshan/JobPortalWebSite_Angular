import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoustomerProfileComponent } from './coustomer-profile.component';

describe('CoustomerProfileComponent', () => {
  let component: CoustomerProfileComponent;
  let fixture: ComponentFixture<CoustomerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoustomerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
