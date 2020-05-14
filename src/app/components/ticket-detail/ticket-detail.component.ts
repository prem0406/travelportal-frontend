import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { TicketRequestService } from 'src/app/services/ticket-request.service';
import { TicketRequest } from 'src/app/models/ticket-request.interface';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  errorMessage:string;
  ticketId: number;
  comment: string;
  constructor(private route: ActivatedRoute,
    private fileService: FileUploadService,private ticketService: TicketRequestService,
    public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ticketId = this.route.snapshot.params['ticketId'];

    this.getImage();

    this.ticketService.getTicket(this.ticketId).subscribe( (ticket: TicketRequest) => {
      this.comment = ticket.comment;
    });
  }

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  type: string;
  fileName: string;


  getImage() {

    //Make a call to Spring Boot to get the Image Bytes.
    this.fileService.getFile(this.ticketId)
      .subscribe(
        res => {
          this.retrieveResonse = res;

          this.base64Data = this.retrieveResonse.picByte;
          this.type = this.retrieveResonse.type;
          this.fileName = this.retrieveResonse.name;

          this.retrievedImage = `data:${this.type};base64,` + this.base64Data;
        },
        error => this.errorMessage = "No Attachements"
      );
  }

  //separate function and sanitizer is user to solve unsafe url problem. Earlier, this.retrievedImage was
  //directly used in html but that was giving error of unsafe url
  getFile(){
    return this.sanitizer.bypassSecurityTrustStyle(this.retrievedImage);
  }

}
