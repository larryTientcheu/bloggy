import { PostListComponent } from './pages/post-list/post-list.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { HomeComponent } from './sections/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "post", component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
