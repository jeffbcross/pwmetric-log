import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _privateAuthState = new BehaviorSubject(
    JSON.parse(localStorage.getItem('authState') || 'null')
  );
  public authState = this._privateAuthState.pipe(
    tap(state => {
      localStorage.setItem('authState', JSON.stringify(state));
    })
  );

  constructor(private router: Router) {}

  login(email: string, password: string) {
    this._privateAuthState.next({
      name: 'Mr. User',
      email
    });
    this.router.navigate(['/secure']);
  }
}

@NgModule({
  providers: [AuthService],
  imports: [CommonModule]
})
export class DataAccessAuthModule {}
