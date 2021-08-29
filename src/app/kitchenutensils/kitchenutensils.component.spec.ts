import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenutensilsComponent } from './kitchenutensils.component';

describe('KitchenutensilsComponent', () => {
  let component: KitchenutensilsComponent;
  let fixture: ComponentFixture<KitchenutensilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenutensilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenutensilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
