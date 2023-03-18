import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts = new Array<any>();

  constructor(){
    console.log("liste des postes")
    this.getPosts();
  }

  getPosts() {
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    let that = this;

    xhr.addEventListener("readystatechange", function () {
      console.log("requete en cours")
      if (this.readyState === 4) {
        console.log("request works")
        console.log(this.responseText);
        try {
          that.posts = JSON.parse(this.responseText);
        } catch (error) {
          console.log("json transformation failed")
          
        }
      }
    });

    xhr.open("GET", "http://103376.bloggy.ecole-it.devigne.space/posts");

    xhr.send();
  }

}
