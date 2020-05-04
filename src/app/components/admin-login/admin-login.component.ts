import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicLoginService } from 'src/app/services/basic-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm: FormGroup;

  usernameControl: FormControl;
  passwordControl: FormControl;

  invalidLogin = false;

  errorMessage= 'Invalid Credentials';

  constructor(private basicLoginService: BasicLoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.usernameControl =  new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl =  new FormControl('', [Validators.required]);

    this.adminLoginForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    });
  }

  handleLogin(){
    const {username, password} = this.adminLoginForm.value;

    this.basicLoginService.authenticate(username, password)
    .subscribe(
      data => {
        this.router.navigate(['admin',data.id]);
        this.invalidLogin = false;
        // this.menuComponent.changeLoginStatus();
      },
      error => {
        if(error.status == 0){
          this.errorMessage = "Server is Down!"
        } else if (error.status == 401) {
          this.errorMessage= 'Invalid Credentials';
        }
        this.invalidLogin = true
      }
    )
    
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

}
