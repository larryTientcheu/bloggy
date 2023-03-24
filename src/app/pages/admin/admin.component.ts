import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  del_Id!: number
  posts!: Posts[]
  authors: any
  formDelete! : FormGroup

  constructor(private route :Router, 
    private httpService : HttpServiceService,
     private builder :FormBuilder) { }

     ngOnInit(): void{
      this.getAuthors();
      this.getPosts()
      this.formDelete = this.builder.group({
        validation: ["", Validators.required],
        idHide:["",Validators.required]
      })
     }

     getPosts(){
      this.httpService.getPosts().subscribe(
        data => {
          this.posts = data.reverse();
        }
      );
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

     createPost(){
      this.route.navigateByUrl("/post-add")
     }

     editPost(id: number){
      this.route.navigateByUrl(`/post-edit/${id}`)
     }

     OndeleteIndex(index:Posts){
      this.formDelete.controls["idHide"].setValue(index.id)
     }

     OnDelete(){
       if(this.formDelete.value.validation == "yes_delete"){
        this.httpService.deletePost(this.formDelete.value.idHide).subscribe()
        this.route.navigate([this.route.url])
        this.notificationSuccess()
        
       }
       else{
        this.route.navigate([this.route.url])
       }
  
     }

     notificationSuccess(){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Post Deleted',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

