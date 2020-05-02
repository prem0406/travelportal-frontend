import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { Email } from 'src/app/models/email.interface';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email : Email;
  forgotForm: FormGroup;

  emailControl: FormControl;

  alertMessage: string;

  constructor(private forgotService : ForgotPasswordService) { }

  ngOnInit(): void {
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);

    this.forgotForm = new FormGroup({
      toAddress: this.emailControl
    });
  }

  handleSubmit(){
    this.email = this.forgotForm.value;
    this.forgotService.getRecoveryUsingEmail(this.email)
    .subscribe( data => {
      this.alertMessage = 'Email Sent...';
    },
    error => {
      this.alertMessage = 'Invalid Email...';
      console.log(error);
    })
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

}
