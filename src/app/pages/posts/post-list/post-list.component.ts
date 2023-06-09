import { HttpServiceService } from '../../../services/http-service.service';
import { Component } from '@angular/core';
import { Posts } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  id!: number
  posts!: Posts[]
  authors: any

  constructor(private httpService: HttpServiceService) {
  }

  ngOnInit(): void {
    this.getAuthors();
    this.refresh();
  }

  refresh() {
    this.httpService.getPosts().subscribe(
      data => {
        this.posts = data.reverse();
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
