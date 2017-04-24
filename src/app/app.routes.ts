import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { BlogAddComponent } from "./pages/blog/blog-add.component";
import { BlogEntryComponent } from "./pages/blog/blog-entry.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { AdminEditComponent } from "./pages/admin/admin-edit.component";
import { AuthGuard } from "./services/guards/auth.guard"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog/entry/:id", component: BlogEntryComponent},
  {path: "blog/add", component: BlogAddComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
  {path: "admin/edit", component: AdminEditComponent, canActivate: [AuthGuard]},
]

export const router = RouterModule.forRoot(APP_ROUTES)
