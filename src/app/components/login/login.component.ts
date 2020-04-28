import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicLoginService } from 'src/app/services/basic-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  usernameControl: FormControl;
  passwordControl: FormControl;

  invalidLogin = false;

  errorMessage= 'Invalid Credentials';

  constructor(private basicLoginService: BasicLoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.usernameControl =  new FormControl('', [Validators.required]);
    this.passwordControl =  new FormControl('', [Validators.required]);

    this.loginForm = new FormGroup({
      username: this.usernameControl,
      password: this.passwordControl
    });
  }

  handleLogin(){
    const {username, password} = this.loginForm.value;
    console.log('sent');
    if(this.basicLoginService.authenticate(username, password)){
      this.invalidLogin = false;
      console.log('Trueee');
      this.router.navigate(['home',11]);
    } else {
      this.invalidLogin = true;
      console.log('Falseee');
    }
    
  }

}
