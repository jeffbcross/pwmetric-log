import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  template: `
    please log in
  `
})
export class AuthFormComponent {}

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
