import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    BusquedaComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    BusquedaComponent,
    FormComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
