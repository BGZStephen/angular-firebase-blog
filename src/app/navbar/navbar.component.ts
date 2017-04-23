import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2"
import { FirebaseService } from "../services/firebase.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible: boolean = false;

  loginStatus;

  constructor(private af: AngularFire, private afService: FirebaseService) {
    this.af.auth.subscribe(auth => this.loginStatus = auth);// user info is inside auth object
  }

  logout() {
    this.afService.logout()
  }

  menuToggle(resize?) {
    if(resize && screen.width < 768) {
      this.menuVisible = false;
      return {"visibility": "hidden", "opacity": "0"}
    } else if (screen.width >= 768) {
      this.menuVisible = true;
      return {"visibility": "visible", "opacity": "1"}
    } else if (this.menuVisible == true) {
      return {"visibility": "visible", "opacity": "1"}
    } else {
      return {"visibility": "hidden", "opacity": "0"}
    }
  }

  ngOnInit() {
  }

}
