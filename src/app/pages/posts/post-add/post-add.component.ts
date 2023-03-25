import { Posts } from 'src/app/models/posts.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {

  postForm!: FormGroup;
  authors!: any;
  error!: any;

  constructor(private route: Router, private builder: FormBuilder, private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.getAuthors();
    this.postForm = this.builder.group({
      title: ["", Validators.required],
      author_id: ["", Validators.required],
      image_url: ["", Validators.required],
      resume: ["", Validators.required],
      content: ["", Validators.required]
    })
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

  onSubmitForm() {
    this.httpService.addPost(this.postForm.value).subscribe(data => console.log(data))
    this.postForm.reset();
    this.notificationSuccess()
    this.route.navigate(['posts']);
  }

  notificationSuccess() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Post Created',
      showConfirmButton: false,
      timer: 1200
    })
  }
  notificationFailure() {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Post Creation Failed: ' + this.error,
      showConfirmButton: false,
      timer: 1200
    })
  }

}
