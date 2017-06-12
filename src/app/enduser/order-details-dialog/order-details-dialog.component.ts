import { Component, OnInit } from '@angular/core';
import { Order} from '../order.model';

@Component({
  selector: 'app-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
  styleUrls: ['./order-details-dialog.component.css']
})
export class OrderDetailsDialogComponent implements OnInit {

  selectedOrder: Order;
  constructor() { }

  ngOnInit() {
  }

}
