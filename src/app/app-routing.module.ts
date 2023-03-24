import { PostEditComponent } from './pages/posts/post-edit/post-edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { PostViewComponent } from './pages/posts/post-view/post-view.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { HomeComponent } from './sections/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './pages/posts/post-add/post-add.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "posts", component: PostListComponent },
  { path: "posts/:id", component: PostViewComponent},
  {path: "post-add", component: PostAddComponent},
  {path: "post-edit/:id", component: PostEditComponent},
  {path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
