import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicLoginService } from 'src/app/services/basic-login.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';


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

    this.basicLoginService.authenticate(username, password)
    .subscribe(
      data => {
        // console.log(data);
        this.router.navigate(['home',data.id]);
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

}
