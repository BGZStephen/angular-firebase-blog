import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FirebaseService } from "../../services/firebase.service"
import { AngularFire } from "angularfire2"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFire, private afService: FirebaseService, private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigate(['/'])
      }
    })
  }

  email: string;
  password: string;

  ngOnInit() {
  }

  login(email, password) {
    this.afService.login(email, password)
  }

}
