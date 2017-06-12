import { Component, OnInit, OnDestroy } from '@angular/core';
import {MdDialog} from '@angular/material';
import { Router }      from '@angular/router';
import { SignInOutDialogComponent } from '../sign-in-out-dialog/sign-in-out-dialog.component';
import { AccountService } from '../account/account.service';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sub: ISubscription ;
  constructor(private dialog: MdDialog, private accountService: AccountService, private router: Router) {

  }

  ngOnInit() {

    this.sub = this.accountService.IsLoggedIn().subscribe((loggedIn) => {
      console.log("Home loggedIn :" + loggedIn);

      if (!loggedIn) {
      /*  let dialogRef = this.dialog.open(SignInOutDialogComponent, {
          width: '600px',
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log("result dialog :" + result);
          dialogRef = null;
        });  */
      }
      else {
        this.router.navigate(["enduser"]);
      }
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
