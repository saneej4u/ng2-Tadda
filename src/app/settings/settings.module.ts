import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SettingComponent } from '../settings/setting.component';
import { HeaderModule } from '../header/header.module';



const settingsRouting: Routes = [
  { path: 'settings', component: SettingComponent }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    RouterModule.forChild(settingsRouting)
  ],
  declarations: [
    SettingComponent
  ]
})
export class SettingsModule { }
