import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from "ngx-webcam";

import { WebCameraComponent } from './web-camera.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [WebCameraComponent],
  imports: [
    WebcamModule,
    CommonModule,
    FormsModule,
  ],
  exports: [WebCameraComponent]
})
export class WebCameraModule { }
