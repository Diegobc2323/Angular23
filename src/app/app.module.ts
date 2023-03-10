import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent } from './Alumno/alumno-lista/alumno-lista.component';
import { AlumnoTituloPipe } from './Alumno/alumno-lista/alumnoTitulo.pipe';
import { AlumnoCountComponent } from './Alumno/alumno-count/alumno-count.component';
import { ProfesorComponent } from './Profesor/Profesor.component';
import { CarreraComponent } from './Carrera/Carrera.component';
import { ProfesoresCarrerasComponent } from './Profesor/ProfesoresCarreras/ProfesoresCarreras.component';
import { CursoComponent } from './Curso/Curso.component';
import { ElegirCursoComponent } from './Curso/ElegirCurso/ElegirCurso.component';

const appRutas: Routes = [
  { path: 'alumno', component: AlumnoListaComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'profesor/:carreraID', component: ProfesoresCarrerasComponent },
  { path: 'alumno/:id', component: AlumnoComponent},
  { path: '', redirectTo: '/alumno', pathMatch: 'full' },
  { path: 'carrera', component: CarreraComponent },
  { path: 'curso', component: CursoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnoListaComponent,
    AlumnoTituloPipe,
    AlumnoCountComponent,
    ProfesorComponent,
    CarreraComponent,
    ProfesoresCarrerasComponent,
    CursoComponent,
    ElegirCursoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
