import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradiComponent } from './tradi.component';

describe('TradiComponent', () => {
  let component: TradiComponent;
  let fixture: ComponentFixture<TradiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
