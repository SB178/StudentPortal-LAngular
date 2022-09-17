import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Components/login/login-service.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private login: LoginServiceService,
    private service: DashboardService
  ) {}

  ngOnInit(): void {
    this.oncall();
  }

  public students = {};

  heading: String[] = [];

  oncall() {
    this.service.getData(this.login.loggindata).subscribe((data) => {
      this.students = data;
      this.heading = Object.values(this.students);
    });
  }

  isNumber(val: any): boolean {
    return typeof val === 'number';
  }
  isString(val: any): boolean {
    return typeof val === 'string';
  }
  logout() {
    this.router.navigate(['/login']);
    this.login.toggleloggedIn();
  }
}
