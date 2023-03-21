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

  getAuthors(): Observable<Users[]> {
    const url = `${API_HOST}${`authors/`}`;
    const req = this.http.get<Users[]>(url, this.httpOptions)
    return req;
  }

  getAuthor(id: number): Observable<Users>{
    const url = `${API_HOST}${`authors/${id}`}`;
    const req = this.http.get<Users>(url, this.httpOptions)
    return req;
  }

  getPosts() {
    const url = `${API_HOST}${`posts/`}`;
    const req = this.http.get<Posts[]>(url, this.httpOptions)
    return req;
  }

  getPost(id: number): Observable<Posts>{
    const url = `${API_HOST}${`posts/${id}`}`;
    const req = this.http.get<Posts>(url, this.httpOptions)
    return req;
  }
}
