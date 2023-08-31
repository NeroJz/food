import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { authEndpoint } from './endpoints';

interface LoginDto { }

interface RegisterDto { }

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  rootUrl: string = authEndpoint;

  constructor(private http: HttpClient) { }

  login(dto: LoginDto) { }

  register(dto: RegisterDto) { }

  assignRole(dto: RegisterDto) { }
}

export { LoginDto, RegisterDto };