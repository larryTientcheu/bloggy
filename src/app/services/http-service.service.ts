import { Posts } from '../models/posts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { envs } from '../secrets/envs';
import { Observable } from 'rxjs';
import { Users } from '../models/user.model';



const API_HOST = envs.apiEndpoint;
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  handleError(error: Error) {
    alert(error.message);
  }

  getAuthors() {
    const url = `${API_HOST}${`authors/`}`;
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const req = this.http.get(url, this.httpOptions)
    return req;
  }

  getPosts(): Observable<Posts[]> {
    const url = `${API_HOST}${`posts/`}`;
    const req = this.http.get<Posts[]>(url, this.httpOptions)
    return req;
  }

  getPost(id: number): Observable<Posts>{
    const url = `${API_HOST}${`posts/${id}`}`;
    const req = this.http.get<Posts>(url, this.httpOptions)
    return req;
  }

  addPost(post: Posts): Observable<Posts>{
    const url = `${API_HOST}${`posts/`}`;
    const req = this.http.post<Posts>(url, post)
    return req;
  }

  editPost(post: Posts,id:number): Observable<Posts>{
    const url = `${API_HOST}${`posts/${id}`}`;
    const req = this.http.put<Posts>(url, post);
    return req;
  }

  deletePost(id: number): Observable<Posts>{
    const url = `${API_HOST}${`posts/${id}`}`;
    const req = this.http.delete<Posts>(url);
    return req
   }

}
