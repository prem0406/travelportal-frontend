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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRegistrationConfirmationComponent } from './components/user-registration-confirmation/user-registration-confirmation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminTicketReviewComponent } from './components/admin-ticket-review/admin-ticket-review.component';
import { TicketRequestConfirmationComponent } from './components/ticket-request-confirmation/ticket-request-confirmation.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

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
    PasswordChangeComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminTicketReviewComponent,
    TicketRequestConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    // UserDataService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
