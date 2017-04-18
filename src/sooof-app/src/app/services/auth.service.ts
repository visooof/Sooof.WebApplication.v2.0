import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
@Injectable()
export class AuthService {
  authKey = "auth";
  constructor(private http: Http) {
  }
  login(username: string, password: string): any {
    var url = "http://localhost:2676/api/jwt"; // JwtProvider's LoginPath
    var data = {
      username: username,
      password: password,
      client_id: "sooof-app",
      grant_type: "password"
    };
    return this.http.post(url, this.toUrlEncodedString(data), new RequestOptions({ headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" }) })).map(response => {
      var auth = response.json();
      console.log("The following auth JSON object has beenreceived:");
      console.log(auth);
      this.setAuth(auth);
      return auth;
    });
  }
  logout(): boolean {
    this.setAuth(null);
    return false;
  }
  toUrlEncodedString(data: any) {
    var body = "";
    for (var key in data) {
      if (body.length) {
        body += "&";
      }
      body += key + "=";
      body += encodeURIComponent(data[key]);
    }
    return body;
  }
  given
  setAuth(auth: any): boolean {
    if (auth) {
      localStorage.setItem(this.authKey, JSON.stringify(auth));
    }
    else {
      localStorage.removeItem(this.authKey);
    }
    return true;
  }
  getAuth(): any {
    var i = localStorage.getItem(this.authKey);
    if (i) {
      return JSON.parse(i);
    }
    else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.authKey) != null;
  }
}