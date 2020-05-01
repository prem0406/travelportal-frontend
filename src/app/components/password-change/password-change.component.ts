import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  passwordForm : FormGroup;

  passwordControl : FormControl;
  confirmPasswordControl : FormControl;

  constructor() { }

  ngOnInit(): void {

    this.passwordControl = new FormControl('', [Validators.required]);
    this.confirmPasswordControl = new FormControl('', [Validators.required]);

    this.passwordForm = new FormGroup({
      password: this.passwordControl,
      confirmPassword: this.confirmPasswordControl
    });
  }


  onFormSubmit(){
    console.log('clicked')
  }

}
