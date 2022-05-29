import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from "ngx-webcam";

import { WebcameraTestComponent } from './webcamera-test.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [WebcameraTestComponent],
  imports: [
    CommonModule,
    WebcamModule,
    FormsModule
  ],
  exports: [WebcameraTestComponent]
})
export class WebcameraTestModule { }
