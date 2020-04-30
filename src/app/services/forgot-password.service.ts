import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../models/email.interface';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  getRecoveryUsingEmail(email: Email){
    return this.http.post(`${API_URL}/forgot`,email);
  }
}
