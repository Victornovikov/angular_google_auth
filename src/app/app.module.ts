import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {GoogleAuthService} from './shared/google-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoogleAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
