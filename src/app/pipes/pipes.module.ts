import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BuiltInComponent } from "./built-in/built-in.component";
import { PipesComponent } from './pipes.component';
import { TempConverterPipe } from './temp-converter.pipe';


@NgModule({
  declarations: [
    BuiltInComponent,
    PipesComponent,
    TempConverterPipe
  ],
  exports: [
    PipesComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    DatePipe
  ]
})
export class PipesModule { }
