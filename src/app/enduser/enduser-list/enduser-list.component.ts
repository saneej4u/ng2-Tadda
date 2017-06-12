import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router }      from '@angular/router';
import { EnduserService } from '../enduser.service';
import { Enduser} from '../enduser.model';
import {MdDialog, MdDialogRef} from '@angular/material';
import { EnduserDialogComponent } from '../enduser-dialog/enduser-dialog.component';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'tadda-enduser-list',
  templateUrl: './enduser-list.component.html',
  styleUrls: ['./enduser-list.component.css']
})
export class EnduserListComponent implements OnInit, OnDestroy {


  endUsers: Enduser[];
  filterQuery: string = "";
  position = 'before';


  getCompanyByUserSubscribtion;
  getAllEndUserSubscribtion;
  selectedCompanyId: number;

  dialogRef: MdDialogRef<EnduserDialogComponent>;


  public isRequesting: boolean;
  @Output() showDetailsListEmit = new EventEmitter<Enduser>();

  constructor(private router: Router, private enduserService: EnduserService, private dialog: MdDialog, private accountService: AccountService) {
    this.isRequesting = true;
  }

  ngOnInit() {

    this.populateEndUserList();
  }


  showDetailsListner(enduser: Enduser) {
    this.showDetailsListEmit.emit(enduser);
  }

  onAddNewUser() {
    this.dialogRef = this.dialog.open(EnduserDialogComponent, {
      disableClose: true
    });

    this.dialogRef.componentInstance.selcetedComId = this.selectedCompanyId;
    this.dialogRef.afterClosed().subscribe(result => {
      this.populateEndUserList();
    });

  }


  ngOnDestroy() {
    let authToken = localStorage.getItem('currentuser');
    if (authToken != null) {

      this.getCompanyByUserSubscribtion.unsubscribe();
      this.getAllEndUserSubscribtion.unsubscribe();
    }

  }



  populateEndUserList() {

    let authToken = localStorage.getItem('currentuser');

    if (authToken != null) {
      let authTokenJson = JSON.parse(authToken);

      this.getCompanyByUserSubscribtion = this.enduserService.GetCompanyByUser(authTokenJson.username).subscribe((company) => {
        this.selectedCompanyId = company.CompanyId;

        this.getAllEndUserSubscribtion = this.enduserService.GetAllEndUser(company.CompanyId)
          .subscribe((response: Enduser[]) => {
            this.endUsers = response;
            for (let user of this.endUsers) {
              this.enduserService.GetAllOrderByEnduser(user.EndUserId)
                .subscribe((response: any) => {
                  user.Orders = response;
                })
            }

            for (let user of this.endUsers) {
              this.enduserService.GetNotificationByEnduser(user.EndUserId)
                .subscribe((response: any) => {
                  user.Notifications = response;
                })
            }

          }, error => {

            this.isRequesting = false;
          }, () => {

            this.isRequesting = false;
          })

      }, (error) => {

        if (error == 401) {
          this.accountService.logout();
          this.router.navigate(["home"])
        }

      })


    }
    else {
      this.accountService.logout();
      this.router.navigate(["home"])
    }

  }
}
