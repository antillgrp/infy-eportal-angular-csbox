import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.loggedUser
    .subscribe(
      login => {
        if (login.authenticated) {
          this.username = login.username;
        } else {
          this.username = null;
        }
      }
    );
  }

}
