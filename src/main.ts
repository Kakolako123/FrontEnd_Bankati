import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {CurrencyExchangeService} from "./app/currency-exchange.service";
import {provideRouter, withComponentInputBinding} from "@angular/router";
import {routes} from "./app/app.routes";
import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes,withComponentInputBinding()),
    CurrencyExchangeService
  ]
}).catch(err => console.error(err));
