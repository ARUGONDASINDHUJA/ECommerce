import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaneshaComponent } from './ganesha.component';

describe('GaneshaComponent', () => {
  let component: GaneshaComponent;
  let fixture: ComponentFixture<GaneshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaneshaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaneshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
