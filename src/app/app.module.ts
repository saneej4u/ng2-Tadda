import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { OrdersModule } from './orders/orders.module';
import { EnduserModule } from './enduser/enduser.module';
import { SettingsModule } from './Settings/Settings.module';
import { NotificationModule }  from './notification/notification.module';
import {MdTabsModule} from '@angular/material';

import { AccountModule } from './account/account.module';
import { SignInOutDialogComponent } from './sign-in-out-dialog/sign-in-out-dialog.component';
import { HomeComponent } from './home/home.component';

import { SettingsService } from './settings/settings.service';




const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
 // {
   // path: 'sign-in',
    //component: HomeComponent
  //},
  {
    path: '',
    component: HomeComponent
  },

];


@NgModule({
  declarations: [
    AppComponent,
    SignInOutDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    HeaderModule,
    AccountModule,
    EnduserModule,
    OrdersModule,
    MdTabsModule,
    SettingsModule,
    NotificationModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    SignInOutDialogComponent
  ],
  providers: [ SettingsService ],
  bootstrap: [AppComponent],
  entryComponents: [
   SignInOutDialogComponent
  ]
})
export class AppModule { }
