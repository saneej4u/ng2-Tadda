import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Company }  from './company.model';


const URL = 'http://localhost/Tadda.WebApi/api/tadda/company/documentUpload/mediaUpload';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  company =  new Company();
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() {

  }

  ngOnInit() {



  }

  public fileOverBase(e: any): void {

    console.log("Uploader: " + this.uploader.progress);

    this.hasBaseDropZoneOver = e;
  }

}