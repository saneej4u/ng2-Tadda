import { Component, OnInit, Input } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { Enduser} from '../enduser.model';
import { InvitationDialogComponent } from '../invitation-dialog/invitation-dialog.component';


@Component({
  selector: 'tadda-enduser-details',
  templateUrl: './enduser-details.component.html',
  styleUrls: ['./enduser-details.component.css']
})
export class EnduserDetailsComponent implements OnInit {

  @Input() endUser: Enduser;
  dialogRef: MdDialogRef<InvitationDialogComponent>;

  constructor(private dialog: MdDialog) { }

  ngOnInit() {

  }

  onSendInvitation() {

    this.dialogRef = this.dialog.open(InvitationDialogComponent);
  }

}
