import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempRoutingModule } from './temp-routing.module';
import { TempComponent } from './temp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TempComponent
  ],
  imports: [
    CommonModule,
    TempRoutingModule,
    FormsModule
  ]
})
export class TempModule { }
