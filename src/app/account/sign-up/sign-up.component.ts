import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import { AccountModel } from '../account-model';
import { AccountService } from '../account.service';

import { SignInOutDialogComponent } from '../../sign-in-out-dialog/sign-in-out-dialog.component';


@Component({
  selector: 'tadda-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  errors: any;
  submitted = false;
  accountModel = new AccountModel('', '', '', '', '', '', 1);

  dialogRef: MdDialogRef<SignInOutDialogComponent>;

  constructor(private dialog: MdDialog, private router: Router, private accountService: AccountService) { }

  ngOnInit() {


  }

  onSubmit() {
    this.submitted = true;
    this.accountService.signUp(this.accountModel).
      subscribe((res: any) => {
        this.router.navigate(["home"]);
      }, (errors) => {
        this.errors = errors._body;
      });
  }

  onSignIn() {

    console.log("onSignIn");

    this.dialogRef = this.dialog.open(SignInOutDialogComponent, {
      width: '600px',
      disableClose: true
    });
  }


}
