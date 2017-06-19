import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }      from '@angular/router';
import { AccountService } from '../../account/account.service';
import {MdDialog} from '@angular/material';
import { SignInOutDialogComponent } from '../../sign-in-out-dialog/sign-in-out-dialog.component';
import { SettingsService } from '../../settings/settings.service';
import { SharedService } from '../../shared/shared.service';
import { Company }  from '../../settings/company.model';

@Component({
  selector: 'tadda-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;
  subscription;
  company = new Company();

  constructor(private accountService: AccountService, private dialog: MdDialog, private router: Router, private settingsService: SettingsService, private sharedService: SharedService) {
    console.log("NavBarComponent - Inside constructor - loggedIn.");
  }

  ngOnInit() {

    let authToken = localStorage.getItem('currentuser');

    if (authToken != null) {
      this.sharedService.GetLoggedInCompany().subscribe((company) => {
        this.company = company;
      }, () => {

      });
    }

    this.settingsService.onLogoUploadCompleteEmit.subscribe((path) => {
      this.company.BrandLogoUrl = path;
    })

    this.subscription = this.accountService.IsLoggedIn().subscribe((loggedIn) => {
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
