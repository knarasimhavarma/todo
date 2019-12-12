import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
     // isUserLoggedIn:boolean;
  constructor(private auth:HardcodedAuthenticationService) { }

  ngOnInit() {
   // this.isUserLoggedIn=this.auth.isUserLoggedIn();
  }

}
