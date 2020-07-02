import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from '../user.model';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user : User;

  constructor(public loginService:LoginService, public route:ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.user = this.loginService.getCurrentUser();
  }
}
