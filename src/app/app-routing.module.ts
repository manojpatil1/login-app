import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'create' , component: RegisterComponent },
  { path: 'welcome' , component: WelcomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
