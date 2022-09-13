import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { AnimalComponentComponent } from './animal-component/animal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponentComponent,
    AnimalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
