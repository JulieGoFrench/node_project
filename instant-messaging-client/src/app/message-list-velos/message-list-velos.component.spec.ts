import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListVelosComponent } from './message-list-velos.component';

describe('MessageListVelosComponent', () => {
  let component: MessageListVelosComponent;
  let fixture: ComponentFixture<MessageListVelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListVelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListVelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
