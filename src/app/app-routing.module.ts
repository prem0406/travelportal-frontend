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


const routes: Routes = [
  // {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home/:id', component: UserHomeComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'registration/confirmation', component: UserRegistrationConfirmationComponent},
  {path: 'home/:userId/ticket/:ticketId', component: NewticketrequestComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'passwordchange', component: PasswordChangeComponent},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
