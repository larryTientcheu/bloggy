import { Bloggy } from './../models/bloggy-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { envs } from '../secrets/envs';


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
    const url = `${API_HOST}${'authors/'}`;
    const req = this.http.get(url, this.httpOptions)
    return req;
  }

  getPosts() {
    const url = `${API_HOST}${'posts/'}`;
    const req = this.http.get<Bloggy[]>(url, this.httpOptions)
    return req;
  }
}
