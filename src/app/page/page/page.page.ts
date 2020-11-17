import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERSON_LIST } from 'src/app/mocks/person.mock';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  personList = PERSON_LIST;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goSignOut(){
    this.router.navigateByUrl('home');
  }
  getPerson(person){
    console.log(person);
  }
}
