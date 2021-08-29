import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircoolerComponent } from './aircooler.component';

describe('AircoolerComponent', () => {
  let component: AircoolerComponent;
  let fixture: ComponentFixture<AircoolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircoolerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
