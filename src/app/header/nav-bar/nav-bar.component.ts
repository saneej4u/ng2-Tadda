import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }      from '@angular/router';
import { AccountService } from '../../account/account.service';
import {MdDialog} from '@angular/material';
import { SignInOutDialogComponent } from '../../sign-in-out-dialog/sign-in-out-dialog.component';


@Component({
  selector: 'tadda-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;
  subscription;
  constructor(private accountService: AccountService, private dialog: MdDialog, private router: Router) {
    console.log("NavBarComponent - Inside constructor - loggedIn.");
  }

  ngOnInit() {

    this.subscription = this.accountService.IsLoggedIn().subscribe((loggedIn) => {

      console.log("NavBarComponent - Inside ngOnInit sub - loggedIn.." + loggedIn);

      this.isLoggedIn = loggedIn;
    })

  }

  OnLogout() {
    this.accountService.logout();
  }

  onSignIn() {

    console.log("onSignIn");

    let dialogRef = this.dialog.open(SignInOutDialogComponent, {
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result dialog :" + result);
      dialogRef = null;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()

  }

}