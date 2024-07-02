import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    BusquedaComponent,
    FormComponent,
    
  
    TableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,

  ],
  exports: [
    BusquedaComponent,
    FormComponent,
    TableComponent,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },//agregue esto y funco pero aun no se agregan valores
    { provide: MatDialogRef, useValue: {} }
  ]
  
})
export class ComponentsModule { }
