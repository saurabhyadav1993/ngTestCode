import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '../../node_modules/@angular/http';
import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { FormBuilder } from '../../node_modules/@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildDetailComponent } from './view-child-detail/view-child-detail.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildComponent,
    ViewChildDetailComponent
  ],
  imports: [
    BrowserModule,HttpModule,ReactiveFormsModule,FormsModule,
    RouterModule.forRoot([
      {
        path:'users',
        component: ViewChildComponent
      },
      {
        path:'users/:id',
        component:ViewChildDetailComponent 
     }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
