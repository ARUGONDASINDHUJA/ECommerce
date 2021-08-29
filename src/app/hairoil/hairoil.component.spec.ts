import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairoilComponent } from './hairoil.component';

describe('HairoilComponent', () => {
  let component: HairoilComponent;
  let fixture: ComponentFixture<HairoilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairoilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
