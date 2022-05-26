import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';



@NgModule({
  declarations: [ChangeDetectionComponent, TabsComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [ChangeDetectionComponent]
})
export class ChangeDetectionModule { }
