import { Component, OnInit, OnDestroy } from '@angular/core';
import { Enduser} from './enduser.model';


@Component({
  selector: 'app-enduser',
  templateUrl: './enduser.component.html',
  styleUrls: ['./enduser.component.css']
})
export class EnduserComponent implements OnInit, OnDestroy {

  selecetedEnduser: Enduser;

  constructor() {

  }

  ngOnInit() {



  }

  showDetailsList(enduser: Enduser) {

    this.selecetedEnduser = enduser;
  }

  ngOnDestroy()
  {
    
  }

}
