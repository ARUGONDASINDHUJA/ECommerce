import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkproductsComponent } from './milkproducts.component';

describe('MilkproductsComponent', () => {
  let component: MilkproductsComponent;
  let fixture: ComponentFixture<MilkproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
