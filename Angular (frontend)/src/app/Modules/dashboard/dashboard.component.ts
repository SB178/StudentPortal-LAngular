import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Components/login/login-service.service';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
