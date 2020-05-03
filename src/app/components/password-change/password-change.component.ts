import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  userId: number;
  errorMessage: string;
  passwordForm : FormGroup;

  passwordControl : FormControl;
  confirmPasswordControl : FormControl;

  constructor(private route: ActivatedRoute,
    private passwordService: ForgotPasswordService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.passwordControl = new FormControl('', [Validators.required]);
    this.confirmPasswordControl = new FormControl('', [Validators.required]);

    this.passwordForm = new FormGroup({
      password: this.passwordControl,
      confirmPassword: this.confirmPasswordControl
    });
  }


  onFormSubmit(){
    console.log('clicked')
    const {password, confirmPassword} = this.passwordForm.value;
    console.log(password);
    //if both passwords are same then
    if(password != confirmPassword){
      this.errorMessage= 'New Password and Confirm Password must be same'
    } else {
        this.passwordService.passwordChange(this.userId, password).subscribe(
        data=>this.handleSuccess(data), 
        error => this.handleError(error)
        );
    }   

  }

  handleSuccess(data: any){
    console.log(data.message);
    this.errorMessage = "Password Changed Successfully!"
  }

  handleError(error: any){
    console.log(error);
    this.errorMessage = "Something Went Wrong! Contact Support Team."
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }
}
