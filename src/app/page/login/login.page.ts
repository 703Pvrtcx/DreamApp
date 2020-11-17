import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {} as Login;
  constructor(private loginDao: LoginService,private router: Router) { }

  ngOnInit() {
  }
  loginSubmit(){
    this.loginDao.login(this.login.email,this.login.password).then(() => {
      this.router.navigateByUrl('tabs/details');
    })
  }

}
