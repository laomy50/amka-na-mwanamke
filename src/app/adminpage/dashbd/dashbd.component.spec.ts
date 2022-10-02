import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbdComponent } from './dashbd.component';

describe('DashbdComponent', () => {
  let component: DashbdComponent;
  let fixture: ComponentFixture<DashbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
