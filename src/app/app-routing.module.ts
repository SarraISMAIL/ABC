import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildListComponent } from './child-list/child-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfSpaceComponent } from './prof-space/prof-space.component';
import { RegisterComponent } from './register/register.component';
//tzid import ll HomeComponent
//_tetzed w7deha parrDefaut!//import {HomeComponent} from './home/home.component';

const routes: Routes = [
  //n7otou 2 attribut loul path! w 2 houwa el component:esm_el_component!__LkolAPP n3mlou haka!
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'child-list',
    component:ChildListComponent
  },
  {
    path:'prof-space',
    component:ProfSpaceComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
