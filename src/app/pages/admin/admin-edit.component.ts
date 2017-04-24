import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  blogItems: Array<object>;

  constructor(private afService: FirebaseService) {
    this.afService.getBlogItems()
    .subscribe(res => {
      this.blogItems = res
      console.log(this.blogItems)
    })
  }

  deleteBlogItem(id) {
    this.afService.deleteBlogEntry(id)
  }

  ngOnInit() {
  }

}
