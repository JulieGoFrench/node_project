import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanardComponent } from './canard.component';

describe('CanardComponent', () => {
  let component: CanardComponent;
  let fixture: ComponentFixture<CanardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
