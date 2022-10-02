import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbrokerComponent } from './formbroker.component';

describe('FormbrokerComponent', () => {
  let component: FormbrokerComponent;
  let fixture: ComponentFixture<FormbrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
