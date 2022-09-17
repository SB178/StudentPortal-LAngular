import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Components/login/login-service.service';
import { LoginComponent } from 'src/app/Components/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private loginservice: LoginServiceService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigate(['/login']);
    this.loginservice.toggleloggedIn();
  }
}
