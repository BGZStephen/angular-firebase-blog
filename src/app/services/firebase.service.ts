import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/Rx"

@Injectable()
export class FirebaseService {

  blogItems: FirebaseListObservable<any[]>

  constructor(private af: AngularFire) {}

  logout() {
    this.af.auth.logout()
  }

  getBlogItems() {
    this.blogItems = this.af.database.list("/articles")
    return this.blogItems;
  }

}
