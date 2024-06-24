import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    InicioComponent,
    RegistroComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    
  ],
  exports: [
    InicioComponent,
    RegistroComponent,
  ]
})
export class PagesModule { }
