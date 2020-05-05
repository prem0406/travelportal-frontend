import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationBean } from '../models/authentication-bean.interface';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constant';

const AUTHENTICATED_USER:string = 'authenticateUser';
const TOKEN: string= 'token';
const USER_ID: string= 'userId';
const ROLE: string= 'role';

@Injectable({
  providedIn: 'root'
})
export class BasicLoginService {
  // userId: number;
  // role: string;

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string){


    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            sessionStorage.setItem(USER_ID,  data.id);
            sessionStorage.setItem(ROLE, data.role);
            // this.userId = data.id;
            // this.role = data.role;
            return data;
          }
        )
      );
  }

  isLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    //console.log('USer.. ',user)
    return !(user === null);
  }

  isUserLoggedIn() {
    // console.log('Role...... ',this.userId);
    // console.log( 'role',this.role == 'USER');
    //console.log('user',this.isLoggedIn() );
    let role = sessionStorage.getItem(ROLE);
    return this.isLoggedIn() && role == 'USER';
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  getLoggedUser(): number{
    return parseInt(sessionStorage.getItem(USER_ID));
  }

  logout(){
    console.log('Logout Service')
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
