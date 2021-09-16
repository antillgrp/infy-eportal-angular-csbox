import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'EPortal';
  username: string;
  constructor(
    private loginService: LoginService,
    private router: Router
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

  onLogout() {
    this.loginService.logout();
    this.router.navigate(['welcome']);
  }



}
