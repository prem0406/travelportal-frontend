import { Component, OnInit } from '@angular/core';
import { BasicLoginService } from 'src/app/services/basic-login.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage: string = 'invalid URL';

  constructor(private loginService: BasicLoginService) { }

  ngOnInit(): void {
    this.loginService.logout();
  }

}
