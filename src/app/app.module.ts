import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpInterceptorBasicAuthService} from './services/http/http-interceptor-basic-auth.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { NewticketrequestComponent } from './components/newticketrequest/newticketrequest.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationConfirmationComponent } from './components/user-registration-confirmation/user-registration-confirmation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    UserHomeComponent,
    NewticketrequestComponent,
    UserRegistrationComponent,
    UserRegistrationConfirmationComponent,
    ForgotPasswordComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // UserDataService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
