import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggedinPage } from './loggedin';

@NgModule({
  declarations: [
    LoggedinPage,
  ],
  imports: [
    IonicPageModule.forChild(LoggedinPage),
  ],
})
export class LoggedinPageModule {}
