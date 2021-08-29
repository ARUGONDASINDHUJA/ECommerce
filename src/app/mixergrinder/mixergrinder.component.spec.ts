import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixergrinderComponent } from './mixergrinder.component';

describe('MixergrinderComponent', () => {
  let component: MixergrinderComponent;
  let fixture: ComponentFixture<MixergrinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixergrinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixergrinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
