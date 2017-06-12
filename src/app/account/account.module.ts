import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';


import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountService } from './account.service';
//import { MaterialModule } from '@angular/material';



const accountRouting: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(accountRouting),
    MdInputModule,
    MdCardModule
   // MaterialModule.forRoot(),
  ],
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  exports: [
    RouterModule,
    SignUpComponent,
    SignInComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
