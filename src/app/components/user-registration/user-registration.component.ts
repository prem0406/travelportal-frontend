import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  firstNameControl: FormControl;
  lastNameControl: FormControl;
  businessUnitControl: FormControl;
  titleControl: FormControl;
  emailControl: FormControl;
  telephoneControl: FormControl;
  address1Control: FormControl;
  address2Control: FormControl;
  cityControl: FormControl;
  stateControl: FormControl;
  zipControl: FormControl;
  countryControl: FormControl;

  constructor(private userDataService: UserDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.firstNameControl = new FormControl('', [Validators.required]);
    this.lastNameControl = new FormControl('', [Validators.required]);
    this.businessUnitControl = new FormControl('', [Validators.required]);
    this.titleControl = new FormControl('', [Validators.required]);
    this.emailControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail)\.com$')]);
    this.telephoneControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]);
    this.address1Control = new FormControl('', [Validators.required]);
    this.address2Control = new FormControl('');
    this.cityControl = new FormControl('', [Validators.required]);
    this.stateControl = new FormControl('', [Validators.required]);
    this.zipControl = new FormControl('', [Validators.required]);
    this.countryControl = new FormControl('', [Validators.required]);
     

    this.userForm = new FormGroup({
      firstName : this.firstNameControl,
      lastName : this.lastNameControl,
      businessUnit : this.businessUnitControl,
      title : this.titleControl,
      email : this.emailControl,
      telephone: this.telephoneControl,
      address1 : this.address1Control,
      address2 : this.address2Control,
      city : this.cityControl,
      state : this.stateControl,
      zip : this.zipControl,
      country : this.countryControl
    });
  }

  onFormSubmit(){
    this.user = this.userForm.value;
    this.userDataService.createUser(this.user).subscribe(() =>{
      this.userDataService.giveData(this.user);
      this.router.navigate(['registration','confirmation']);
    });
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }
}
