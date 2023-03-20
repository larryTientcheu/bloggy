import { Component } from '@angular/core';
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
  this.refresh();
 }

 refresh(){
 try {
   this.httpService.get('authors/').subscribe(
     data => {
       this.authors = data;
       console.log('It works');
     }
   );
 } catch (error) {
  console.log(error)
  
 }
 }

}
