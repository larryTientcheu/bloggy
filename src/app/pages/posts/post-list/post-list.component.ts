import { HttpServiceService } from '../../../services/http-service.service';
import { Component } from '@angular/core';
import { Posts } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts! : Posts[]

  constructor(private httpService: HttpServiceService){
 }

 ngOnInit(): void{
  this.refresh();
 }

 refresh(){
  this.httpService.getPosts().subscribe(
    data => {
      this.posts = data;
      console.log(this.posts);
    }
  );
 }

}
