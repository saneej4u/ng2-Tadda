import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Enduser} from '../enduser.model';
import { Order} from '../order.model';
import { EnduserService } from '../enduser.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent implements OnInit {

  primary: string = "primary";
  selectedEndUser: Enduser;
  order = new Order();
  constructor(public dialogRef: MdDialogRef<OrderDialogComponent>, private enduserService: EnduserService) { }

  ngOnInit() {


  }



  onOrderCreate() {
    this.order.CompanyId = this.selectedEndUser.CompanyId;
    this.order.EndUserID = this.selectedEndUser.EndUserId;

    this.enduserService.CreateOrder(this.order).subscribe((order) => {
      if (order != null) {
        this.dialogRef.close();
      }
    })
  }

}
