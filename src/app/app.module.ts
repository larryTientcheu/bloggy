import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostViewComponent } from './pages/posts/post-view/post-view.component';
import { PostEditComponent } from './pages/posts/post-edit/post-edit.component';
import { AuthorListComponent } from './pages/authors/author-list/author-list.component';
import { PostAddComponent } from './pages/posts/post-add/post-add.component';
import { AuthorAddComponent } from './pages/authors/author-add/author-add.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PostListComponent,
    PostViewComponent,
    PostEditComponent,
    AuthorListComponent,
    PostAddComponent,
    AuthorAddComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
