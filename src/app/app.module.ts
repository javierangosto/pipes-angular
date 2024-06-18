import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Locale Configuration
import localeEs from "@angular/common/locales/es"
import localeEnGb from "@angular/common/locales/en-GB"
import localeFrCa from "@angular/common/locales/fr-CA"
import { registerLocaleData } from "@angular/common"

registerLocaleData(localeEs);
registerLocaleData(localeEnGb);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: "es" // Estable este local por defecto en toda la aplicación
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
