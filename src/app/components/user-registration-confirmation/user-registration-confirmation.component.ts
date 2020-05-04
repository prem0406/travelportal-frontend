import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../../models/user.interface';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-user-registration-confirmation',
  templateUrl: './user-registration-confirmation.component.html',
  styleUrls: ['./user-registration-confirmation.component.css']
})
 
export class UserRegistrationConfirmationComponent implements OnInit {
  userData: User
  constructor(private userDataService : UserDataService,private router : Router) { }
 
  ngOnInit(): void {
    this.userData =  this.userDataService.getData();
  }
  
  printPage() {
    window.print();
  }
  homepage(){
    this.router.navigate(['login']);
  }
 
}