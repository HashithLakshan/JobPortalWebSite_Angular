import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreshootCatgoryComponent } from './preshoot-catgory.component';

describe('PreshootCatgoryComponent', () => {
  let component: PreshootCatgoryComponent;
  let fixture: ComponentFixture<PreshootCatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreshootCatgoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreshootCatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
