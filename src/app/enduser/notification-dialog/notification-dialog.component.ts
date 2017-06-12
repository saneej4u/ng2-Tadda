import { Component, OnInit } from '@angular/core';
import { Order} from '../order.model';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Notification} from '../notification.model';
import { EnduserService } from '../enduser.service';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

  selectedOrder: Order;
  notification = new Notification();
  constructor(public dialogRef: MdDialogRef<NotificationDialogComponent>, private enduserService: EnduserService) { }

  ngOnInit() {
  }

  onNotificationCreate() {
    this.notification.OrderId = this.selectedOrder.OrderID;
    this.notification.EnduserId = this.selectedOrder.EndUserID;
    
    this.enduserService.CreatNotification(this.notification).subscribe((not) => {
      if (not != null) {
        this.dialogRef.close();
      }
    })

  }

}
