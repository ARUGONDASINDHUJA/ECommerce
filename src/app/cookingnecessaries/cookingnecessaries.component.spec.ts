import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingnecessariesComponent } from './cookingnecessaries.component';

describe('CookingnecessariesComponent', () => {
  let component: CookingnecessariesComponent;
  let fixture: ComponentFixture<CookingnecessariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingnecessariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingnecessariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
