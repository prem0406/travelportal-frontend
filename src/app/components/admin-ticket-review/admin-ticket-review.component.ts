import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketRequestService } from 'src/app/services/ticket-request.service';
import { TicketRequest } from 'src/app/models/ticket-request.interface';
import { error } from 'protractor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatusRto } from 'src/app/models/status-rto.interface';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-admin-ticket-review',
  templateUrl: './admin-ticket-review.component.html',
  styleUrls: ['./admin-ticket-review.component.css']
})
export class AdminTicketReviewComponent implements OnInit {
  ticketForm: FormGroup;
  adminId: number;
  ticketId: number;
  ticketRequest: TicketRequest;

  actionControl: FormControl;
  commentControl: FormControl;

  constructor(private route: ActivatedRoute, private ticketServie: TicketRequestService,
    private fileService: FileUploadService, private router : Router) { }

  ngOnInit(): void {
    this.actionControl = new FormControl('', [Validators.required]);
    this.commentControl = new FormControl('');

    this.ticketForm = new FormGroup({
      action: this.actionControl,
      comment: this.commentControl
    })

    this.adminId = this.route.snapshot.params['adminId'];
    this.ticketId = this.route.snapshot.params['ticketId'];

    this.ticketServie.getTicket(this.ticketId).subscribe((data: TicketRequest) => {
      this.ticketRequest = data;
      this.makeStatusInProcess(this.ticketRequest);
    }, error => this.handleErrorResponse(error))

  }

  handleErrorResponse(error:any) {
    
    console.log('Error getting ticket: ', error);
  }

  onFormSubmit(){
    // console.log('clicked...', this.ticketForm.value.action)
    const statusRTO: StatusRto = {
      ticketRequestId: this.ticketId,
      status: this.ticketForm.value.action,
      comment: this.ticketForm.value.comment
    }

    //console.log(statusRTO);

    this.ticketServie.changeStatus(statusRTO, this.adminId).subscribe(
      data => {
        console.log('status Updated');
        this.router.navigate(['admin',this.adminId]);
      }, 
      error => console.log('unable to change status: ',error)
    );
  }

  makeStatusInProcess(ticket: TicketRequest){
    if(ticket.status == 'SUBMITTED'){
      this.ticketServie.makeStatusInProcess(ticket,this.adminId).subscribe(
        data => console.log('made In_PRocess...'), 
        error => console.log('unable to change status to IN_PRogress',error)
      );
    }
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  //FILE UPLOADING PROCESS
  selectedFile: File;
  message: string;

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    
    
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
      this.fileService.uploadFile(this.ticketId,uploadImageData)
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

}
