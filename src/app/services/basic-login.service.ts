import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationBean } from '../models/authentication-bean.interface';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constant';

const AUTHENTICATED_USER:string = 'authenticateUser';
const TOKEN: string= 'token';

@Injectable({
  providedIn: 'root'
})
export class BasicLoginService {
  userId: number

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
            this.userId = data.id;
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);

    return !(user === null)
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  getLoggedUser(): number{
    return this.userId;
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
