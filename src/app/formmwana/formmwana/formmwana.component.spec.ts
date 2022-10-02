import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmwanaComponent } from './formmwana.component';

describe('FormmwanaComponent', () => {
  let component: FormmwanaComponent;
  let fixture: ComponentFixture<FormmwanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmwanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmwanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
