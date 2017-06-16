import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule} from '@angular/material';

import { SettingComponent } from '../settings/setting.component';
import { HeaderModule } from '../header/header.module';

import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload'

import { SharedModule } from '../shared/shared.module'

import { SharedService } from '../shared/shared.service';




const settingsRouting: Routes = [
  { path: 'settings', component: SettingComponent }

];

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    FormsModule,
    HeaderModule,
    SharedModule,
    RouterModule.forChild(settingsRouting)
  ],
  declarations: [
    SettingComponent,
    FileDropDirective,
    FileSelectDirective
  ],
  providers:[ SharedService ]
})
export class SettingsModule { }
