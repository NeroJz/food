import { Injectable } from '@angular/core';

export interface ToastInfo {
  header: string;
  body: string;
  classname?: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: ToastInfo[] = [];

  show(header: string, body: string, classname?: string) {
    this.toasts.push({ header, body, classname });
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
