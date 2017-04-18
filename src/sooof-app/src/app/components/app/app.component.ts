import { AuthService } from "../../services/auth.service";
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor(public router: Router, public authService: AuthService) { }

  isActive(data: any[]): boolean {
    return this.router.isActive(
      this.router.createUrlTree(data),
      true);
  }

  logout(): boolean {
    if (this.authService.logout()) {
      this.router.navigate([""]);
    }
    return false;
  }
}
