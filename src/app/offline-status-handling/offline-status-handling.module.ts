import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineStatusHandlingComponent } from './offline-status-handling.component';

@NgModule({
  declarations: [OfflineStatusHandlingComponent],
  imports: [
    CommonModule
  ],
  exports: [OfflineStatusHandlingComponent]
})
export class OfflineStatusHandlingModule { }
