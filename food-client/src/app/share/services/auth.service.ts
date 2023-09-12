import { Injectable } from '@angular/core';
import { authHost } from './constants';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export interface RegisterDto {
  email: string;
  name: string;
  phonumber: string;
  password: string;
  role?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface CurrentUser {
  id: string;
  email: string;
  roles?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = authHost;
  authenticated$ = new BehaviorSubject<CurrentUser | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  // Use Register Observable
  handleRegister(register: RegisterDto) {

    return this.signup(register)
      .pipe(
        pluck('id'),
        switchMap((id: any) => this.assignRole(id, register.role!))
      );
  }

  signup(register: RegisterDto) {
    return this.http.post(
      `${this.rootUrl}/signup`,
      register,
    );
  }

  assignRole(userId: string, role: string) {
    return this.http.post(
      `${this.rootUrl}/${userId}/role`,
      { name: role }
    );
  }

  signin(body: LoginDto) {
    return this.http.post<CurrentUser>(
      `${this.rootUrl}/signin`,
      body
    ).pipe(
      tap((val) => {
        if (val) {
          this.authenticated$.next(val as CurrentUser);
        }
      })
    );
  }

  signout() {
    return this.http.post(
      `${this.rootUrl}/signout`,
      {}
    ).pipe(
      tap(() => {
        this.authenticated$.next({} as CurrentUser);
      })
    );
  }

  checkAuth() {
    return this.http.get<CurrentUser>(
      `${this.rootUrl}/current-user`,
    ).pipe(
      tap((val) => {
        if (val) {
          this.authenticated$.next(val as CurrentUser);
        }
      })
    );
  }
}
