import { Component, OnInit } from '@angular/core';
import { BasicLoginService } from 'src/app/services/basic-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userId: number;
  url : string;
  homeUrl: string;
  constructor(public basicLoginService: BasicLoginService) { }

  ngOnInit(): void {
    this.userId = this.basicLoginService.getLoggedUser();
    this.url = `/home/${this.userId}/ticket/-1`;
    this.homeUrl = `/home/${this.userId}`;
  }

  changeLoginStatus(){
    
  }

}
