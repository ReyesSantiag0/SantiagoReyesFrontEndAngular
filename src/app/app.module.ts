import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';
import { ListarDatosPersonalesComponent } from './components/listar-datos-personales/listar-datos-personales.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    ListarComentariosComponent,
    VerComentariosComponent,
    ListarDatosPersonalesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
