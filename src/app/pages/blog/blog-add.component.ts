import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  constructor(private afService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  addBlogItem(blogTitle, blogDescription, blogImgUrl, blogAuthor) {
    let createdAt = Date();
    let blogEntry = {"name": blogTitle, "description": blogDescription, "imgUrl": blogImgUrl, "author": blogAuthor, "created": createdAt}
    this.afService.addBlogItem(blogEntry)
    this.router.navigate(['/'])
  }

}
