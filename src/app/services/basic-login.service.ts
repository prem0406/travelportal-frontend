import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicLoginService {

  constructor() { }

  authenticate(username: string, password: string){
    console.log('process');
    if(username==="user" && password === 'user') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
