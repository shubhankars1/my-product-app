import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AuthModule { }
