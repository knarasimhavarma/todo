import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from './../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'varma';
  password: string = '';
  errorMessage: string = 'Invalid Credential';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService, private basicAuthenticate: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.basicAuthenticate.executeBasicAuthenticateService(this.username, this.password)
      .subscribe(
      data => {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
      )
  }
}
