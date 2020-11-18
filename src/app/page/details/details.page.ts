import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERSON_LIST } from 'src/app/mocks/person.mock';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  personList = PERSON_LIST;
   bookList= []; 
  constructor(private bookDao: BookService, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }
  goProfile(){
   
    this.router.navigateByUrl('tabs/profile');
 }


  getBooks(){
    this.bookDao.getBooks().subscribe(data => {
      this.bookList =  data.map( e =>  {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Book
        } as Book

      });
      console.log('Firebase ',this.bookList);
    })
}

  
  goSignOut(){
    this.router.navigateByUrl('login');
  }
  getPerson(person){
    console.log(person);
  }
}



// this.bookDao.getBooks().subscribe(data => {
    
//   this.bookList =  data.map( e =>  { 
//     return{ 
//     key: e.payload.doc.id,
//     ...e.payload.doc.data() as Book
//   } as Book 
// });
// }

