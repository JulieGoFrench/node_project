import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantMessageVeloComponent } from './instant-message-velo.component';

describe('InstantMessageVeloComponent', () => {
  let component: InstantMessageVeloComponent;
  let fixture: ComponentFixture<InstantMessageVeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantMessageVeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantMessageVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
