import { Injectable } from '@angular/core';
import { authHost } from './constants';
import { HttpClient } from '@angular/common/http';

export interface RegisterDto {
  email: string;
  name: string;
  phonumber: string;
  password: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rootUrl: string = authHost;

  constructor(
    private http: HttpClient
  ) { }

  signup(register: RegisterDto) {
    return this.http.post(
      `${this.rootUrl}/signup`,
      register
    );
  }

  assignRole(userId: string, role: string) {
    return this.http.post(
      `${this.rootUrl}/${userId}/role`,
      { name: role }
    );
  }
}
