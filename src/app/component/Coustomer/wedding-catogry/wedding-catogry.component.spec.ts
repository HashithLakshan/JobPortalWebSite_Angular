import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCatogryComponent } from './wedding-catogry.component';

describe('WeddingCatogryComponent', () => {
  let component: WeddingCatogryComponent;
  let fixture: ComponentFixture<WeddingCatogryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingCatogryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingCatogryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
