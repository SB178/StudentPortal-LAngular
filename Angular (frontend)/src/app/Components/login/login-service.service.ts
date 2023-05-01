import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}
  private loggedIn = false;
  public loggindata!: string;

  login(username: any, password: any): Observable<Number> {
    this.loggindata = username;
    const body = {
      name: username,
      password: password,
    };

    const headers = {
      type: 'post',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
    };

    if (
      this.http
        .post<Number>(environment.apiPath, body, {
          headers,
        })
        .subscribe((val) => val == 1)
    ) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    return this.http.post<Number>(environment.apiPath, body, {
      headers,
    });
  }

  isloggedin(): boolean {
    return this.loggedIn;
  }

  toggleloggedIn() {
    this.loggedIn = !this.loggedIn;
  }
}
