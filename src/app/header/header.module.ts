import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { AccountModule } from '../account/account.module';
//import { EnduserModule } from '../enduser/enduser.module';


@NgModule({
  imports: [
    CommonModule,
      RouterModule,
    MdButtonModule, 
    MdCheckboxModule,
    AccountModule
  ],
  exports: [
    NavBarComponent
  ],
  declarations: [
    NavBarComponent
    ]
})
export class HeaderModule { }
