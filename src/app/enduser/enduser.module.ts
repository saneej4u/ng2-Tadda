import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EnduserListComponent } from './enduser-list/enduser-list.component';
import { EnduserDetailsComponent } from './enduser-details/enduser-details.component';
import { EnduserComponent } from './enduser.component';
import {MdListModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';

import { EnduserService } from './enduser.service';
import { EnduserItemComponent } from './enduser-item/enduser-item.component';
import { EnduserOrderComponent } from './enduser-order/enduser-order.component';
import { EnduserfilterPipe } from './enduserfilter.pipe';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';
import { EnduserDialogComponent } from './enduser-dialog/enduser-dialog.component';
import { OrderDetailsDialogComponent } from './order-details-dialog/order-details-dialog.component';

import { HeaderModule } from '../header/header.module';
import { InvitationDialogComponent } from './invitation-dialog/invitation-dialog.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
import { ViewNotificationDialogComponent } from './view-notification-dialog/view-notification-dialog.component';

const enduserRouting: Routes = [
  { path: 'enduser', component: EnduserComponent }

];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdListModule,
    MdTabsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdTooltipModule,
    MdDialogModule,
    HeaderModule,
    RouterModule.forChild(enduserRouting)

  ],
  exports: [
    RouterModule
  ],
  declarations: [
    EnduserListComponent,
    EnduserDetailsComponent,
    EnduserComponent,
    EnduserItemComponent,
    EnduserOrderComponent,
    EnduserfilterPipe,
    OrderDialogComponent,
    EnduserDialogComponent,
    OrderDetailsDialogComponent,
    InvitationDialogComponent,
    NotificationDialogComponent,
    ViewNotificationDialogComponent
  ],
  providers: [EnduserService],
  entryComponents: [
    OrderDialogComponent,
    EnduserDialogComponent,
    OrderDetailsDialogComponent,
    InvitationDialogComponent,
    NotificationDialogComponent,
    ViewNotificationDialogComponent
  ]
})
export class EnduserModule { }
