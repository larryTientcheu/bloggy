import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envs } from '../secrets/envs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  endpoint = envs.apiEndpoint;

  constructor(private http: HttpClient) { }

  getEndpoint(resource: String) {
    return this.http.get(this.endpoint + resource + '/');
  }
}
