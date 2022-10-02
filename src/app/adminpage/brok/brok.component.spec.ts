import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokComponent } from './brok.component';

describe('BrokComponent', () => {
  let component: BrokComponent;
  let fixture: ComponentFixture<BrokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
