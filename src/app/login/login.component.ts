import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService, Authenticate } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'user';
  password: string = '';
  errorMessage: string = 'Invalid Credential';
  invalidLogin = false;
  autheticate:Authenticate;

  constructor(private router: Router, private basicAuth: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.basicAuth.basicAuthentication(this.username, this.password).subscribe(
      data => {
        this.autheticate=data;
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    )
  }
}
