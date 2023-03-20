import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './sections/navigation/navigation.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostViewComponent } from './pages/post-view/post-view.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PostListComponent,
    PostViewComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
