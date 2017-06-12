import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { AccountModel } from '../account-model';
import { AccountService } from '../account.service';
import { MdDialogRef } from '@angular/material';
import { SignInOutDialogComponent } from '../../sign-in-out-dialog/sign-in-out-dialog.component';


@Component({
  selector: 'tadda-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  errors: any;
  submitted = false;
  accountModel = new AccountModel('', '', '', '', '', '', 1);

  constructor(private router: Router, private accountService: AccountService, private dialogRef: MdDialogRef<SignInOutDialogComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    this.accountService.login(this.accountModel.email, this.accountModel.password).subscribe((result) => {
      if (this.accountService.isLoggedIn == true) {
        let redirect = this.accountService.redirectUrl;

        if (redirect) {
          this.router.navigate([redirect])
        }
        else {
          this.dialogRef.close();
          console.log("Sign in - Success ");

          this.router.navigate(["enduser"])
        }
      }
      else {
        alert("Login Failed");
      }

    }, () => {

      this.errors = 'Username or password is incorrect';

    }, () => {
    })
  }

  onSignUp() {
    this.dialogRef.close();
    this.router.navigate(["home"])
  }

}
