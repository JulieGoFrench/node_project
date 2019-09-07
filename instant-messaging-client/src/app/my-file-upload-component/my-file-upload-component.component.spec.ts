import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFileUploadComponentComponent } from './my-file-upload-component.component';

describe('MyFileUploadComponentComponent', () => {
  let component: MyFileUploadComponentComponent;
  let fixture: ComponentFixture<MyFileUploadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFileUploadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFileUploadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
