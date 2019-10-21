import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const LOCAL_STORAGE_KEY = 'perflogAuthState';

export interface User {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _privateAuthState = new BehaviorSubject<User | null>(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || 'null')
  );
  public authState = this._privateAuthState.pipe(
    tap(state => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
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

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this._privateAuthState.next(null);
  }
}

@NgModule({
  providers: [AuthService],
  imports: [CommonModule]
})
export class DataAccessAuthModule {}
