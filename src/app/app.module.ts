import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import {CurrencyConverterComponent} from "./currency-converter/currency-converter.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {MatIconModule} from "@angular/material/icon";
import {TestComponent} from "./test/test.component";
// Importation de Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {ChangePasswordComponent} from "./change-password/change-password.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CurrencyConverterComponent,
    SideBarComponent,
    MatIconModule,
    TestComponent,
    ChangePasswordComponent,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas); // Ajout des icônes solid (optionnel)
  }
}
