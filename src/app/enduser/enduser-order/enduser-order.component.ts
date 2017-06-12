import { Component, OnInit, Input} from '@angular/core';
import { EnduserService } from '../enduser.service';

import {MdDialog, MdDialogRef} from '@angular/material';

import { Order} from '../order.model';
import { Enduser} from '../enduser.model';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { OrderDetailsDialogComponent } from '../order-details-dialog/order-details-dialog.component'

import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { ViewNotificationDialogComponent } from '../view-notification-dialog/view-notification-dialog.component';

@Component({
  selector: 'tadda-enduser-order',
  templateUrl: './enduser-order.component.html',
  styleUrls: ['./enduser-order.component.css']
})
export class EnduserOrderComponent implements OnInit {

  @Input() orders: Order[];
  @Input() enduser: Enduser;

  dialogRef: MdDialogRef<OrderDialogComponent>;
  orderDetailsDialogComponentDialogRef: MdDialogRef<OrderDetailsDialogComponent>;
  notificationDialogComponentDialogRef: MdDialogRef<NotificationDialogComponent>;
  viewNotificationDialogComponentDialogRef : MdDialogRef<ViewNotificationDialogComponent>;

  constructor(private enduserService: EnduserService, private dialog: MdDialog) {

  }


  ngOnInit() {

    this.enduserService.orderCreatedEmit.subscribe((orderResult) => {
      this.orders.push(orderResult);
    }, (error) => {
      console.log("Emit Order Error: " + error);
    })

  }


  onOrderClick() {

    this.dialogRef = this.dialog.open(OrderDialogComponent);

    this.dialogRef.componentInstance.selectedEndUser = this.enduser;

  }

  onOrderDetails(order: Order) {

    this.orderDetailsDialogComponentDialogRef = this.dialog.open(OrderDetailsDialogComponent);

    this.orderDetailsDialogComponentDialogRef.componentInstance.selectedOrder = order;

  }

  onSendNotification(order: Order) {
    this.notificationDialogComponentDialogRef = this.dialog.open(NotificationDialogComponent);

    this.notificationDialogComponentDialogRef.componentInstance.selectedOrder = order;
  }

  onViewNotification(order: Order)
  {
    this.viewNotificationDialogComponentDialogRef = this.dialog.open(ViewNotificationDialogComponent);
    this.viewNotificationDialogComponentDialogRef.componentInstance.selectedOrder = order;
    
  }

}
