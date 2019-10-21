import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  template: `
    <h1>Welcome to the Secure Page</h1>
  `
})
export class SecurePage {}

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SecurePage
      }
    ])
  ],
  declarations: [SecurePage]
})
export class FeatSecurePageModule {}
