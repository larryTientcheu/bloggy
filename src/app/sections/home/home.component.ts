import { Component } from '@angular/core';
import { Posts } from 'src/app/models/posts.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id!: number
  posts!: Posts[]
  authors: any

  constructor(private httpService: HttpServiceService){
 }

 ngOnInit(): void{
  this.getAuthors()
  this.homePosts();
 }

 homePosts(){
  this.httpService.getPosts().subscribe(
    data => {
      this.posts = data.reverse()
    }
  );
 }

 getAuthors() {
 
    this.httpService.getAuthors().subscribe(
      data => {
        this.authors = data;
      }
    );
}

getAuthorByPost(id: number) {
  let result: any;
  try {
    this.authors.forEach((author: any) => {
      if (author.id === id) {
        result = author;
      }
    });
  } catch (error) {
    console.log(error)
    
  }
  return result;
}

}
