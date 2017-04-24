import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogItems: Array<object>;

  constructor(private afService: FirebaseService) {
    this.afService.getBlogItems()
    .subscribe(res => {
      this.blogItems = res
      console.log(this.blogItems)
    })
  }

  ngOnInit() {
  }

}
