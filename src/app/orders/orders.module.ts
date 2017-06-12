import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OrderComponent } from '../orders/order.component';
import { HeaderModule } from '../header/header.module';



const orderRouting: Routes = [
  { path: 'order', component: OrderComponent }

];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    RouterModule.forChild(orderRouting)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    OrderComponent
  ]


})

export class OrdersModule { }
