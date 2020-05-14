import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { NewticketrequestComponent } from './components/newticketrequest/newticketrequest.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserRegistrationConfirmationComponent } from './components/user-registration-confirmation/user-registration-confirmation.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { RouteGuardService } from './services/route-guard.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminTicketReviewComponent } from './components/admin-ticket-review/admin-ticket-review.component';
import { TicketRequestConfirmationComponent } from './components/ticket-request-confirmation/ticket-request-confirmation.component';
import { CoronaComponent } from './components/corona/corona.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin/login', component: AdminLoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'home/:id', component: UserHomeComponent, canActivate: [RouteGuardService]},
  {path: 'admin/:adminId', component: AdminHomeComponent, canActivate: [RouteGuardService]},
  {path: 'admin/:adminId/tickets/:ticketId', component: AdminTicketReviewComponent, canActivate: [RouteGuardService]},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'registration/confirmation', component: UserRegistrationConfirmationComponent},
  {path: 'home/:userId/ticket/:ticketId', component: NewticketrequestComponent, canActivate: [RouteGuardService]},
  {path: 'home/ticket/:ticketId', component: TicketDetailComponent, canActivate: [RouteGuardService]},
  {path: 'home/:userId/ticketconfirmation', component: TicketRequestConfirmationComponent,canActivate: [RouteGuardService]},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'home/:userId/passwordchange', component: PasswordChangeComponent, canActivate: [RouteGuardService]},
  {path: 'corona', component: CoronaComponent},
  {path: 'error', component: ErrorComponent},


  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
