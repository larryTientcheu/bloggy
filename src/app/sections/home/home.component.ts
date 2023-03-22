import { Component } from '@angular/core';
import { Posts } from 'src/app/models/posts.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts! : Posts[]

  constructor(private httpService: HttpServiceService){
 }

 ngOnInit(): void{
  this.homePosts();
 }

 homePosts(){
  this.httpService.getPosts().subscribe(
    data => {
      this.posts = data;
      // console.log(this.posts);
    }
  );
 }

}
