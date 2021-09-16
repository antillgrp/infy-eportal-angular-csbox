import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { LoginService } from './login.service';

import { CtrlErrorDisplayComponent } from '../add-employee/ctrlErrorDisplay.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
  styles: [
    // https://www.tutorialsteacher.com/angularjs/angularjs-validation-css-classes
    'input.ng-pristine {background-color:yellow;}',
    'input.ng-touched.ng-invalid {background-color:red;}',
    'input.ng-touched.ng-valid {background-color:rgb(130, 218, 130);}'
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  loginForm: FormGroup;
  
  //https://dev.to/benneee_/creating-a-show-or-hide-password-feature-for-angular-forms-4fdk
  showpassword:boolean=true;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [ 'Username', [ Validators.required ] ],
      password: [ 'P@ssw0rd', [ 
        Validators.required, 
        Validators.pattern(/(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)/*(?=.*[A-Z])*/ 
      ] ]
    });
  }

  _ERROR:string;

  onLogin() {
    this.loginService
    .tryAuthenticate(this.loginForm.value)
    .subscribe(
      login => {
        console.log(login);
        if (login.authenticated) {
          this.router.navigate(['employee']);
          //this.router.navigate(['welcome']);
        } else {
          this._ERROR= 'Invalid Credentials...Please try again later';
          this.loginForm.reset();
          setTimeout(() => {
            this._ERROR=null;
          },3000)
        }
      }
    );
  }
}
