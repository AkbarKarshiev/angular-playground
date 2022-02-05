import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFormsComponent } from './angular-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AngularFormsComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  exports: [
    AngularFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AngularFormsModule { }
