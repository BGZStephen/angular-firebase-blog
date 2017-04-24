import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  blogEntry: object;

  constructor(private afService: FirebaseService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.afService.getBlogEntry(id)
      .subscribe(res => {
        this.blogEntry = res;
      })
    })
  }

  updateBlogItem(key, blogTitle, blogDescription, blogImgUrl, blogAuthor) {
    this.afService.updateBlogEntry(key, {"name": blogTitle, "description": blogDescription, "imgUrl": blogImgUrl, "author": blogAuthor})
    this.router.navigate(['/admin/edit'])
  }

}
