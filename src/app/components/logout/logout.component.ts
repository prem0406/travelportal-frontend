import { Component, OnInit } from '@angular/core';
import { BasicLoginService } from 'src/app/services/basic-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private basicLoginService: BasicLoginService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('Logout Comp')
    this.basicLoginService.logout();
    this.router.navigate(['login']);
  }

}
