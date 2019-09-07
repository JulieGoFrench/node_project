import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiensComponent } from './chiens.component';

describe('ChiensComponent', () => {
  let component: ChiensComponent;
  let fixture: ComponentFixture<ChiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
