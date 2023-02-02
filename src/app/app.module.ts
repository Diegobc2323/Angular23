import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent } from './Alumno/alumno-lista/alumno-lista.component';
import { AlumnoTituloPipe } from './Alumno/alumno-lista/alumnoTitulo.pipe';
import { AlumnoCountComponent } from './Alumno/alumno-count/alumno-count.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    AlumnoTituloPipe,
    AlumnoCountComponent,
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
