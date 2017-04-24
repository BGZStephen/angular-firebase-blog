import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {

  blogEntry: object;

  constructor(private activatedRoute: ActivatedRoute, private afService: FirebaseService) { }

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((id) => {
      this.afService.getBlogEntry(id)
      .subscribe(res => {
        this.blogEntry = res;
        console.log("BlogItem", this.blogEntry)
      })
    })
  }

}
