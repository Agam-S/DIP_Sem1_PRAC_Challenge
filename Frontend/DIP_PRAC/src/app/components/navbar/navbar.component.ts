import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private loginService : AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    if(this.loginService.isLoggedIn()) {
      this.loginService.deleteToken();
      this.router.navigate(['/login']);
    }
  }
}