import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  template: `
    <h1>Welcome to the Secure Page</h1>
    <a
      data-flickr-embed="true"
      href="https://www.flickr.com/photos/whiteoctevents/48803222807/in/album-72157711083363381/"
      title="AngularConnect 2019"
      ><img
        src="https://live.staticflickr.com/65535/48803222807_25ccd7d907_b.jpg"
        width="1024"
        height="683"
        alt="AngularConnect 2019"/></a
    ><script
      async
      src="//embedr.flickr.com/assets/client-code.js"
      charset="utf-8"
    ></script>
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
