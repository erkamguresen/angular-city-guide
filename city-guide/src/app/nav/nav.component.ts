import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loginUser: string;
  loginPassword: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {
    this.loginUser = '';
    this.loginPassword = '';
  }

  ngOnInit() {
    this.isLoggedIn();
  }

  login() {
    this.authService.login(this.loginUser, this.loginPassword).subscribe({
      next: (data: any) => {
        this.authService.saveToken(data.data.loginUser);
        this.router.navigate(['/']);
        this.alertifyService.success('Logged in successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout() {
    this.authService.logout();
    this.alertifyService.error('Logged out successfully');
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
