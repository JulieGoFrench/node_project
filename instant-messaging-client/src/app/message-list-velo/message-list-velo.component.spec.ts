import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListVeloComponent } from './message-list-velo.component';

describe('MessageListVeloComponent', () => {
  let component: MessageListVeloComponent;
  let fixture: ComponentFixture<MessageListVeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListVeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
