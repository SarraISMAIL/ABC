import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfSpaceComponent } from './prof-space/prof-space.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ChildListComponent } from './child-list/child-list.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './app-footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfSpaceComponent,
    HomeComponent,
    RegisterComponent,
    ChildListComponent,
    LoginComponent,
    FooterComponent,

    ContentComponent,

    NavbarComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
