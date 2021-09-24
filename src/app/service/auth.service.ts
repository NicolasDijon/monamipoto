import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user == null) {
      this.router.navigateByUrl('/');
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/');
  }
}
