import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DogsittersComponent } from './dogsitters/dogsitters.component';
import { ProfileComponent } from './profile/profile.component';
import { DogsitterinfoComponent } from './dogsitterinfo/dogsitterinfo.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'dogsitters', component: DogsittersComponent},
	{ path: 'profile', component: ProfileComponent},
	{ path: 'dogsitterinfo/:id', component: DogsitterinfoComponent},
	{ path: 'signup', component: SignupComponent},
	{ path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
