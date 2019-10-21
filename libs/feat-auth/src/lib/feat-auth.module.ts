import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '@perflog/data-access-auth';

@Component({
  template: `
    <label for="email">
      Email
      <input #email name="email" type="email" />
    </label>
    <br />
    <label for="password">
      Password
      <input #password name="password" type="password" />
    </label>
    <button class="submit" (click)="auth.login(email, password)">Submit</button>
  `
})
export class AuthFormComponent {
  constructor(public auth: AuthService) {}
}

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AuthFormComponent }
    ])
  ],
  declarations: [AuthFormComponent]
})
export class FeatAuthModule {}
