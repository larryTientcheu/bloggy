import { Component } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
 authors: any;

  constructor(private httpService: HttpServiceService){
 }

 ngOnInit(): void{
  this.getAuthorsList();
 }

 getAuthorsList(){
 try {
   this.httpService.getAuthors().subscribe(
     data => {
       this.authors = data;
     }
   );
 } catch (error) {
  console.log(error)
  
 }
 }

}
