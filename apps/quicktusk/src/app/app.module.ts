import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DataAccessAuthModule } from '@perflog/data-access-auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('@perflog/feat-auth').then(esm => esm.FeatAuthModule)
      }
    ]),
    DataAccessAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
