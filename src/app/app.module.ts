import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import * as fromApp from './store/app.reducer';
import { appEffects } from './store/app.effects';
import { AppComponent } from './app.component';
import { SwiperTestComponent } from './swiper-test/swiper-test.component';
import { OwlCaruselTestComponent } from './owl-carousel-test/owl-carusel-test.component';
import { ApiInterceptorService } from "./services/api-interceptor.service";
import { StoreTestComponent } from './store-test/store-test.component';
import { CounterTestComponent } from './counter-test/counter-test.component';
import { CounterNameComponent } from './counter-name/counter-name.component';
import { environment } from "../environments/environment.prod";
import { DirectivesModule } from "./directives/directives.module";
import { PipesModule } from "./pipes/pipes.module";
import { ComponentCommunicationModule } from "./component-communication/component-communication.module";
import { ComponentLifecycleHooksModule } from "./component-lifecycle-hooks/component-lifecycle-hooks.module";
import { AngularFormsModule } from "./angular-forms/forms.module";
import { FormsModule } from "@angular/forms";
import { DependencyInjectionModule } from "./dependency-injection/dependency-injection.module";
import { AdvancedComponentsModule } from "./advanced-components/advanced-components.module";


@NgModule({
  declarations: [
    AppComponent,
    SwiperTestComponent,
    OwlCaruselTestComponent,
    StoreTestComponent,
    CounterTestComponent,
    CounterNameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SwiperModule,
    RouterModule,
    CarouselModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot(appEffects),
    DirectivesModule,
    PipesModule,
    ComponentCommunicationModule,
    ComponentLifecycleHooksModule,
    AngularFormsModule,
    DependencyInjectionModule,
    AdvancedComponentsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
