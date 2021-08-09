import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CapitulosComponent } from './components/capitulos/capitulos.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonajesPipe } from './pipes/personajes/personajes.pipe';
import { CapitulosPipe } from './pipes/capitulos/capitulos.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    CapitulosComponent,
    NavigationComponent,
    PersonajesPipe,
    CapitulosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
