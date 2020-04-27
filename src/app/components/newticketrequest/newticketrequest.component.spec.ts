import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewticketrequestComponent } from './newticketrequest.component';

describe('NewticketrequestComponent', () => {
  let component: NewticketrequestComponent;
  let fixture: ComponentFixture<NewticketrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewticketrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewticketrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
