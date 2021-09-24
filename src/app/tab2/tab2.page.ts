import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  title = 'Mon ami poto page 2';


  constructor(private router: Router, private authService: AuthService) {}

  ionViewWillEnter() {
    this.authService.checkAuth();
  }
}
