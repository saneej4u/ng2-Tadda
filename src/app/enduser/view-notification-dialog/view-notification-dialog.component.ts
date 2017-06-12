import { Component, OnInit } from '@angular/core';
import { Order} from '../order.model';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Notification} from '../notification.model';
import { EnduserService } from '../enduser.service';

@Component({
  selector: 'app-view-notification-dialog',
  templateUrl: './view-notification-dialog.component.html',
  styleUrls: ['./view-notification-dialog.component.css']
})
export class ViewNotificationDialogComponent implements OnInit {

  selectedOrder: Order;
  notifications: Notification[];

  constructor(public dialogRef: MdDialogRef<ViewNotificationDialogComponent>, private enduserService: EnduserService) { }

  ngOnInit() {

    this.enduserService.GetNotificationByOrder(this.selectedOrder.OrderID)
      .subscribe((notification) => {
        this.notifications = notification;
      })

  }

}
