import { Injectable } from "@angular/core";

import {
  HttpClient,
  //HttpRequest,
  HttpHeaders
} from "@angular/common/http";

//import { RequestOptions, Headers } from "@angular/http";

import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

import { Login } from "./login";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  // declare a BehaviorSubject to store username and password value
  loggedUser: BehaviorSubject<Login> = new BehaviorSubject<Login>({
    username: null,
    password: null,
    authenticated: false
  });

  // login: Login;
  // loginStatus: boolean;

  constructor(private http: HttpClient) {}

  loginUrl = "/api/login";

  tryAuthenticate(login: Login): Observable<Login> {
    // const headers = new HttpHeaders();
    // headers.append("Content-Type", "application/json");
    // //You can append here whatever you like in your headers;
    // headers.append(login.username, login.password);
    // const options = new HttpRequest(
    //   "POST",
    //   this.loginUrl,
    //   {},
    //   { headers: headers }
    // );
    const body = JSON.stringify({
      username: login.username,
      password: login.password
    });
    const headers = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<any>(this.loginUrl, body, headers).pipe(
      map((res) => {
        console.log("auth" + JSON.stringify(res));
        login.authenticated = res.message;
        this.loggedUser.next(login);
        return login;
      })
    );
  }

  logout() {
    this.loggedUser.next({
      username: null,
      password: null,
      authenticated: false
    });
  }
}
