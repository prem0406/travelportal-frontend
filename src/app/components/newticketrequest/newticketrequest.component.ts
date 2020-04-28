import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TicketRequest } from 'src/app/models/ticket-request.interface';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-newticketrequest',
  templateUrl: './newticketrequest.component.html',
  styleUrls: ['./newticketrequest.component.css']
})
export class NewticketrequestComponent implements OnInit {
  ticketForm: FormGroup;
  ticketRequest: TicketRequest;

  requestTypeControl: FormControl;
  priorityControl: FormControl;
  travelCityControl: FormControl;
  fromLocationCityControl: FormControl;
  travelStartDateControl: FormControl; 
  travelEndDateControl: FormControl; 
  passportNoControl: FormControl; 
  projectNameControl: FormControl; 
  expenseBourneByControl: FormControl;
  travelApproverNameControl: FormControl;
  expectedDurationControl: FormControl; 
  upperBoundControl: FormControl;
  additionalDetailsControl: FormControl; 

  constructor(private route: ActivatedRoute,
    private userDataService: UserDataService, private router : Router) { }

  //for adding user details along with tickets
  userId: number;

  //this will be used for upadating tickets
  ticketId: number;

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.ticketId = this.route.snapshot.params['ticketId'];

    this.requestTypeControl = new FormControl('', [Validators.required]);
    this.priorityControl = new FormControl('', [Validators.required]);
    this.travelCityControl = new FormControl('', [Validators.required]);
    this.fromLocationCityControl = new FormControl('', [Validators.required]);
    this.travelStartDateControl = new FormControl('', [Validators.required]); 
    this.travelEndDateControl = new FormControl('', [Validators.required]);
    this.passportNoControl = new FormControl('', [Validators.required]);
    this.projectNameControl = new FormControl('', [Validators.required]);
    this.expenseBourneByControl = new FormControl('', [Validators.required]);
    this.travelApproverNameControl = new FormControl('', [Validators.required]);
    this.expectedDurationControl = new FormControl('', [Validators.required]);
    this.upperBoundControl = new FormControl('', [Validators.required]);
    this.additionalDetailsControl = new FormControl('', [Validators.required]);

    this.ticketForm = new FormGroup({
      requestType : this.requestTypeControl,
      priority : this.priorityControl,
      travelCity : this.travelCityControl,
      fromLocationCity : this.fromLocationCityControl,
      travelStartDate : this.travelStartDateControl,
      travelEndDate : this.travelEndDateControl,
      passportNo : this.passportNoControl,
      projectName : this.projectNameControl,
      expenseBourneBy : this.expenseBourneByControl,
      travelApproverName : this.travelApproverNameControl,
      expectedDuration : this.expectedDurationControl,
      upperBound : this.upperBoundControl,
      additionalDetails : this.additionalDetailsControl,
    })
  }

  onFormSubmit(){
    this.ticketRequest = this.ticketForm.value;
    this.userDataService.createTicketRequest(this.ticketRequest, this.userId).subscribe(() => this.handleSuccess(), 
    error => error => this.handleErrorResponse(error));
  }

  handleSuccess(){
    console.log('ticket uploaded')
    this.router.navigate(['home',this.userId]);

  }

  handleErrorResponse(error) {
    
    console.log('Error getting user tickes ', error);
    console.log('Error getting user tickes ', error.error.message);
  }

}
