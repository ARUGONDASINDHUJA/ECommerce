import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationnecessariesComponent } from './educationnecessaries.component';

describe('EducationnecessariesComponent', () => {
  let component: EducationnecessariesComponent;
  let fixture: ComponentFixture<EducationnecessariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationnecessariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationnecessariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
