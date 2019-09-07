import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelosComponent } from './velos.component';

describe('VelosComponent', () => {
  let component: VelosComponent;
  let fixture: ComponentFixture<VelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
