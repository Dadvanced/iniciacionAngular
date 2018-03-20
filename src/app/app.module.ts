import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiSaludoComponent } from './mi-saludo/mi-saludo.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { RepitiendoComponenteComponent } from './repitiendo-componente/repitiendo-componente.component';
import { EventoClickComponent } from './evento-click/evento-click.component';
import { EntradaDatosComponent } from './entrada-datos/entrada-datos.component';
import { ConvertidorEurosComponent } from './convertidor-euros/convertidor-euros.component';
import { NgComponentComponent } from './ng-component/ng-component.component';
import { DirectivaNgmodelComponent } from './directiva-ngmodel/directiva-ngmodel.component';
import { NgforClasesComponent } from './ngfor-clases/ngfor-clases.component';

@NgModule({
  declarations: [
    AppComponent,
    MiSaludoComponent,
    MiComponenteComponent,
    RepitiendoComponenteComponent,
    EventoClickComponent,
    EntradaDatosComponent,
    ConvertidorEurosComponent,
    NgComponentComponent,
    DirectivaNgmodelComponent,
    NgforClasesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
