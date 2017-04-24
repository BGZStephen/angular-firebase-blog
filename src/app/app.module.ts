import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { AngularFireModule } from 'angularfire2';
import { FirebaseService} from "./services/firebase.service"
import { firebaseConfig } from "./api"
import { AuthGuard } from "./services/guards/auth.guard"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogEntryComponent } from './pages/blog/blog-entry.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { BlogAddComponent } from './pages/blog/blog-add.component';
import { AdminEditComponent } from './pages/admin/admin-edit.component';
import { BlogEditComponent } from './pages/blog/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    BlogEntryComponent,
    AdminComponent,
    LoginComponent,
    BlogAddComponent,
    AdminEditComponent,
    BlogEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [FirebaseService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
