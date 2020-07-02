import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from '../user.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : User;
  submitted = false;
  isinvaliduser = false;
  constructor(public loginService:LoginService, private router: Router
){}
  ngOnInit() {
    this.login = {username :'' , password: '', firstname: '', lastname: ''};
    this.isinvaliduser = false;
    this.submitted = false;
  }


  onLogin (loginForm : NgForm) {
    if (loginForm.invalid) {
      this.submitted = true;
      return;
    }
    this.login = this.loginService.authenticateUser(loginForm.value.username,loginForm.value.password)
    if (this.login === null) {
      this.isinvaliduser = true;
      this.login = {username :'' , password: '', firstname: '', lastname: ''};
      return;
    }
    this.router.navigate(['welcome']);
    this.submitted = false;
    loginForm.resetForm();
  }

}
