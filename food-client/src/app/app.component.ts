import { Component } from '@angular/core';
import { AuthService, CurrentUser } from './share/services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-client';
  signedIn$: BehaviorSubject<CurrentUser | null>;

  constructor(
    private authSvc: AuthService
  ) {
    this.signedIn$ = this.authSvc.authenticated$;
    console.log(this.signedIn$);
  }

  ngOnInit() {
    this.authSvc.checkAuth().subscribe();
  }
}
