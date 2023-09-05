import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AtributosComponent } from './components/atributos/atributos.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AtributosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
