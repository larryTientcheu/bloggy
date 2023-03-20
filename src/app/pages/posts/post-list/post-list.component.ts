import { HttpServiceService } from '../../../services/http-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: any;

  constructor(private httpService: HttpServiceService){
 }

 ngOnInit(): void{
  this.refresh();
 }

 refresh(){
  this.httpService.get('posts/').subscribe(
    data => {
      this.posts = data;
      console.log(this.posts);
    }
  );
 }

}
