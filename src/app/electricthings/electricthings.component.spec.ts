import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricthingsComponent } from './electricthings.component';

describe('ElectricthingsComponent', () => {
  let component: ElectricthingsComponent;
  let fixture: ComponentFixture<ElectricthingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricthingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricthingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
