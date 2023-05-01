import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root',
})
export class LoginguardService implements CanActivate {
  constructor(private service: LoginServiceService, private route: Router) {}

  canActivate(): boolean {
    if (this.service.isloggedin()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
}
