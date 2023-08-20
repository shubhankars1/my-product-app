import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './services/api-service.service';
import { TestComponent } from './test/test.component';
import { EventServiceService } from './services/event-service.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FontChangerDirective } from './directives/font-changer.directive';
import { ColorChangerDirective } from './directives/color-changer.directive';



@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    TestComponent,
    FontChangerDirective,
    ColorChangerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    HttpClientModule,
    MatSlideToggleModule
  ],
  providers: [ApiService, EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
