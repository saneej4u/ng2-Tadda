import { Component, OnInit } from '@angular/core';
import { Enduser} from '../enduser.model';
import { EnduserService } from '../enduser.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-enduser-dialog',
  templateUrl: './enduser-dialog.component.html',
  styleUrls: ['./enduser-dialog.component.css']
})
export class EnduserDialogComponent implements OnInit {

  primary: string = "primary";
  enduser = new Enduser(1, "", "", "", "", "08/09/1982", "", "", null);
    selcetedComId:number;
  constructor(private enduserService: EnduserService, private dialogRef: MdDialogRef<EnduserDialogComponent>) {

    this.primary = "primary";
  }

  ngOnInit() {
  }

  onEnduserClose() {
    this.dialogRef.close();
  }
  onAddEndUser() {

    this.enduser.CompanyId = this.selcetedComId;
    this.enduserService.CreateEndUser(this.enduser)
      .subscribe(result => {

        this.dialogRef.close();
        console.log("result:" + JSON.stringify(result));

      }, (error) => {

        console.log("error:" + error);
      });
  }

}
