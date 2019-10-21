import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  CanLoad,
  Router,
  Route,
  UrlSegment,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AppComponent } from './app.component';
import { DataAccessAuthModule, AuthService } from '@perflog/data-access-auth';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CheckAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.authState.pipe(
      map(state => !!state),
      tap(state => {
        console.log('state', state);
        if (!state) this.router.navigate(['/login']);
      })
    );
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            import('@perflog/feat-auth').then(esm => esm.FeatAuthModule)
        },
        {
          path: 'secure',
          loadChildren: () =>
            import('@perflog/feat-secure-page').then(
              esm => esm.FeatSecurePageModule
            ),
          canActivate: [CheckAuthGuard]
        }
      ],
      {
        enableTracing: true
      }
    ),
    DataAccessAuthModule
  ],
  providers: [CheckAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
