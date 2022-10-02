import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MwanaComponent } from './mwana.component';

describe('MwanaComponent', () => {
  let component: MwanaComponent;
  let fixture: ComponentFixture<MwanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MwanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MwanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
