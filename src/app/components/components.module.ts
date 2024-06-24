import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    BusquedaComponent,
    FormComponent,
    NavbarComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    BusquedaComponent,
    FormComponent,
    NavbarComponent,
    TableComponent,
  ]
})
export class ComponentsModule { }
