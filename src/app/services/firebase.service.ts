import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthMethods, AuthProviders } from 'angularfire2';
import "rxjs/Rx"

@Injectable()
export class FirebaseService {

  blogItems: FirebaseListObservable<any[]>

  constructor(private af: AngularFire) {}

  login(email, password) {
      console.log(email, password)
      this.af.auth.login({
      email: email,
      password: password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });

  }

  logout() {
    this.af.auth.logout()
  }

  addBlogItem(blogItemObject) {
    const articles = this.af.database.list('/articles');
    articles.push(blogItemObject);
  }

  getBlogItems() {
    this.blogItems = this.af.database.list("/articles")
    return this.blogItems;
  }

}
