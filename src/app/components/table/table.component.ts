
import {SelectionModel} from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Person {
  nombre: string;
  apellido: string;
  identificacion: string;
  genero: string;
  fechaNacimiento: string;
  direccion: string;
  empleo: string;
  fallecido: boolean;
}

const ELEMENT_DATA: Person[] = [
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '123456789', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: false },
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '987654321', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: false },
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '123987456', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: false },
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '321654987', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: false },
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '456789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: false },
  { nombre: 'Mario', apellido: 'Perez', identificacion: '14573789', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: false },
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '123456789', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: false },
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '987654321', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: false },
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '123987456', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: false },
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '321654987', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: false },
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '456789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: false },
  { nombre: 'Mario', apellido: 'Perez', identificacion: '14573789', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: false },
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '123456789', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: false },
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '987654321', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: false },
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '123987456', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: false },
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '321654987', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: false },
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '456789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: false },
  { nombre: 'Mario', apellido: 'Perez', identificacion: '14573789', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: false },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'identificacion', 'genero', 'fechaNacimiento', 'direccion', 'empleo', 'fallecido', 'editar'];
  dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);
  selection = new SelectionModel<Person>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Person): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nombre + 1}`;
  }
}

  

/*
import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
export interface Person {
  nombre: string;
  apellido: string;
  identificacion: string;
  genero: string;
  fechaNacimiento: string;
  direccion: string;
  empleo: string;
  fallecido: boolean;
  editar?: string;
}
const ELEMENT_DATA: Person[] = [
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '123456789', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: false, editar: 'Editar'},
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '987654321', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: false, editar: 'Editar'},
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '123987456', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: false , editar: 'Editar'},
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '321654987', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: false ,  editar: 'Editar'},
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '456789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: false , editar: 'Editar'},
  { nombre: 'Mario', apellido: 'Perez', identificacion: '14573789', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: false , editar: 'Editar'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class TableComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'identificacion', 'genero', 'fechaNacimiento', 'direccion', 'empleo', 'fallecido', 'editar'];
  dataSource = new MatTableDataSource<Person>(ELEMENT_DATA);
  selection = new SelectionModel<Person>(true, []);
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

 
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

 
  checkboxLabel(row?: Person): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nombre + 1}`;
  }
}

*/

