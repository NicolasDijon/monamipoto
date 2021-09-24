import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  title = 'Mon ami poto page 3';

  constructor(private authService: AuthService) {}

  ionViewWillEnter() {
    this.authService.checkAuth();
  }
}
