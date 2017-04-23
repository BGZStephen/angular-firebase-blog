import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2"
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogItems: FirebaseListObservable<any>;

  constructor(private afService: FirebaseService) {

  }

  ngOnInit() {
  }

}
