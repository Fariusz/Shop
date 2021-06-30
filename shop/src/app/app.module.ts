import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './appComponent/app.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormularzComponent } from './formularz/formularz.component';
import { SklepComponent } from './sklep/sklep.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    KoszykComponent,
    ArtykulyComponent,
    FormularzComponent,
    SklepComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
