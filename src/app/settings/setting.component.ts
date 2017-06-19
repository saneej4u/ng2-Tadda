import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { Company }  from './company.model';

import { SettingsService } from './settings.service';
import { SharedService } from '../shared/shared.service';


const URL = 'http://localhost/Tadda.WebApi/api/tadda/company/uploadazure';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class SettingComponent implements OnInit {

  company = new Company();

  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor(private settingsService: SettingsService, private sharedService: SharedService) {


  }

  ngOnInit() {

    this.sharedService.GetLoggedInCompany().subscribe((company) => {
      this.company = company;
    }, () => {

    });

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.company.BrandLogoUrl = JSON.parse(response);
      this.settingsService.SaveCompany(this.company).subscribe(() => {
        this.settingsService.OnUploadComplete(this.company.BrandLogoUrl);
      },
        () => {

        });

    };


  }

  public fileOverBase(e: any): void {

    console.log("fileOverBase: " + e);

    this.hasBaseDropZoneOver = e;
  }

  onSaveCompany() {
    this.settingsService.SaveCompany(this.company).subscribe((result) => {

      this.company = result;
      console.log("Company Updated..." + JSON.stringify(this.company));

    }, () => {

    });
  }



}