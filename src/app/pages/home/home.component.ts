import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2"
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogItems: {};

  constructor(private af: AngularFire, private afService: FirebaseService) {
  }

  ngOnInit() {
    this.afService.getBlogItems()
    .subscribe(res => {
      this.blogItems = res
      console.log(this.blogItems)
    })
  }

}
