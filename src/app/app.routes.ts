import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminComponent } from "./pages/admin/admin.component";

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "blog", component: BlogComponent},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
