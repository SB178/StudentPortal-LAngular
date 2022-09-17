import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomepageComponent } from './Components/homepage/homepage.component';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, HomepageComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
