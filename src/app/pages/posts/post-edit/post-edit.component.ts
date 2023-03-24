import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/models/posts.model';
import { HttpServiceService } from 'src/app/services/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {

  postEditForm!: FormGroup;
  post!: Posts;
  authors!: any
  id!: number

  constructor(private route: ActivatedRoute, private router: Router, private builder: FormBuilder, private httpService: HttpServiceService){}

  ngOnInit(): void {
    this.getAuthors();
    this.id = this.route.snapshot.params['id'];
    this.postEditForm = this.builder.group({
      title : ["",Validators.required] ,
      author_id :["",Validators.required],
      image_url:["",Validators.required] ,
      resume:["",Validators.required],
      content:["",Validators.required] 
    })
    this.getPost(this.id);
  }

  getAuthors() {
    try {
      this.httpService.getAuthors().subscribe(
        data => {
          this.authors = data;
          console.log(this.authors);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  getPost(id: number){
    this.httpService.getPost(id).subscribe(res =>{
    this.postEditForm.controls["title"].setValue(res.title),
    this.postEditForm.controls["image_url"].setValue(res.image_url),
    this.postEditForm.controls["resume"].setValue(res.resume),
    this.postEditForm.controls["author_id"].setValue(res.author_id),
    this.postEditForm.controls["content"].setValue(res.content)
    })
  }

  edit(){
    this.post ={
      id :this.id,
      ... this.postEditForm.value,
      created_at:new Date

    }
    this.httpService.editPost(this.post,this.id).subscribe(res =>console.log(res))
    this.router.navigate(['posts/',this.id]);
    this.notificationSuccess()
  }
  notificationSuccess(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Post Edited',
      showConfirmButton: false,
      timer: 1200
    })
  }
}
