import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Enduser} from '../enduser.model';

@Component({
  selector: 'tadda-enduser-item',
  templateUrl: './enduser-item.component.html',
  styleUrls: ['./enduser-item.component.css']
})
export class EnduserItemComponent implements OnInit {

  @Input() enduser: Enduser;
  @Output() showDetailsEmit = new EventEmitter<Enduser>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedEnduser(enduser: Enduser) {
    this.showDetailsEmit.emit(enduser);
  }

}
