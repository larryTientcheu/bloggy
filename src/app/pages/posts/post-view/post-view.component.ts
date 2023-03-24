import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/models/posts.model';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent{
  id!: number
  post!: Posts
  authors: any

  constructor(private httpService: HttpServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAuthors()
    this.refresh();
  }

  refresh() {
    this.id = this.route.snapshot.params['id']
    try {
      this.httpService.getPost(this.id).subscribe(
        data => {
          this.post = data;
  
        })
    } catch (error) {
      
    }
  }

  getAuthors() {
    try {
      this.httpService.getAuthors().subscribe(
        data => {
          this.authors = data;
        }
      );
    } catch (error) {
      console.log(error);
    }
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
      
    }
    return result;
  }

}
