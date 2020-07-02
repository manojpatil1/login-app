import { User } from './user.model';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class LoginService{

  private users : User[] = [];
  private currentUser : User;

  addUser(username:string,password:string,firstname:string,lastname:string) {
    this.users.push({username: username,password:password,firstname:firstname,lastname:lastname});
  }

  public getCurrentUser() {
    return this.currentUser;
  }
  private getUser(username:string) {
    return this.users.find(u => username === u.username);
  }

  public logout() {
    this.currentUser = null;
  }
  authenticateUser(username:string,password:string) {
    const user = this.getUser(username);
    if(null != user && username === user.username && user.password === password){
      console.log('Valid User');

      this.currentUser = {firstname:user.firstname,lastname:user.lastname, username:user.username, password:''};
      return this.currentUser;
    } else{
      console.log('Invalid User');
      return null;
    }


  }

}
