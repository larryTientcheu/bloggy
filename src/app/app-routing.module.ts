import { PostViewComponent } from './pages/posts/post-view/post-view.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { AuthorListComponent } from './pages/authors/author-list/author-list.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { HomeComponent } from './sections/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "posts", component: PostListComponent },
  { path: "posts/:id", component: PostViewComponent},
  { path: "authors", component: AuthorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
