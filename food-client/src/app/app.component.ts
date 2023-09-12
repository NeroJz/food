import { Component, TemplateRef } from '@angular/core';
import { AuthService, CurrentUser } from './share/services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-client';
  signedIn$: BehaviorSubject<CurrentUser | null>;

  constructor(
    private authSvc: AuthService,
    private modalSvc: NgbModal,
    private router: Router
  ) {
    this.signedIn$ = this.authSvc.authenticated$;
    console.log(this.signedIn$);
  }

  ngOnInit() {
    this.authSvc.checkAuth().subscribe();
  }

  showLogoutModal(content: any) {
    this.modalSvc.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result
      .then(
        (val) => this.logout()
      )
  }

  logout() {
    this.authSvc.signout()
      .subscribe(
        () => { },
        (err) => { },
        () => {
          this.router.navigateByUrl('/');
        }
      )
  }
}
