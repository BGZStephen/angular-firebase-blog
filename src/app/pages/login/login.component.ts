import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from "angularfire2"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth))
  }

  email: string;
  password: string;

  ngOnInit() {
  }

  login(email, password) {
      console.log(email, password)
      this.af.auth.login({
      email: email,
      password: password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });

  }

}
