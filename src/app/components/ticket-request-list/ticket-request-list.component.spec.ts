import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRequestListComponent } from './ticket-request-list.component';

describe('TicketRequestListComponent', () => {
  let component: TicketRequestListComponent;
  let fixture: ComponentFixture<TicketRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
