import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from '../user.model';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User;
  submitted = false;
  userCreated = false;

  constructor(public loginService:LoginService, public route:ActivatedRoute, private router: Router){}
  ngOnInit() {
    this.userCreated = false;
    this.user = {username :'' , password: '', firstname: '', lastname: ''};
  }


  addUser (loginForm : NgForm) {
    if (loginForm.invalid) {
      this.submitted = true;
      return;
    }

    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    this.loginService.addUser(loginForm.value.username,loginForm.value.password,loginForm.value.firstname,loginForm.value.lastname);

    this.submitted = false;
    this.userCreated = true;
    loginForm.resetForm();

  }

}
