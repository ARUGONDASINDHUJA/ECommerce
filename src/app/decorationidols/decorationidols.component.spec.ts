import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationidolsComponent } from './decorationidols.component';

describe('DecorationidolsComponent', () => {
  let component: DecorationidolsComponent;
  let fixture: ComponentFixture<DecorationidolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorationidolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorationidolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
