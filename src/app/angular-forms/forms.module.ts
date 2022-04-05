import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFormsComponent } from './angular-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsFormArraysComponent } from './reactive-forms-form-arrays/reactive-forms-form-arrays.component';
import { GteValidatorDirective } from './directives/gte-validator.directive';

@NgModule({
  declarations: [
    AngularFormsComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    ReactiveFormsFormArraysComponent,
    GteValidatorDirective,
  ],
  exports: [
    AngularFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AngularFormsModule { }
