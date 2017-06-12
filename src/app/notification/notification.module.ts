import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotificationComponent } from '../notification/notification.component';
import { HeaderModule } from '../header/header.module';


const notificationRouting: Routes = [
  { path: 'notification', component: NotificationComponent }

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    RouterModule.forChild(notificationRouting)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
     NotificationComponent
  ]
})
export class NotificationModule { }
