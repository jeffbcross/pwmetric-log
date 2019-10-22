import { Component } from '@angular/core';
import { AuthService } from '@perflog/data-access-auth';

@Component({
  selector: 'perflog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quicktusk';
  constructor(public auth: AuthService) {}
}
