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

  get(endpoint: string) {
    const url = `${API_HOST}${endpoint}`;
    const req = this.http.get(url, this.httpOptions)
    return req;

  }
}
