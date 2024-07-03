
import {SelectionModel} from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

export interface Person {
  nombre: string;
  apellido: string;
  identificacion: string;
  genero: string;
  fechaNacimiento: string;
  direccion: string;
  empleo: string;
  fallecido: string;
}

const ELEMENT_DATA: Person[] = [
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '123406789', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: 'No' },
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '987657321', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: 'No' },
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '123977456', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: 'No' },
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '321654987', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: 'No' },
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '756789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: 'No' },
  { nombre: 'Mario', apellido: 'Perez', identificacion: '14577789', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: 'No' },
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '173456789', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: 'No' },
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '987654311', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: 'No' },
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '123987756', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: 'No' },
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '32165498', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: 'No' },
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '476789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: 'No' },
  { nombre: 'Mario', apellido: 'Perez', identificacion: '145737898', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: 'No' },
  { nombre: 'Juanita', apellido: 'Perez', identificacion: '12345679', genero: 'Femenino', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', empleo: 'Programadora', fallecido: 'No' },
  { nombre: 'Ana', apellido: 'Gomez', identificacion: '97657321', genero: 'Femenino', fechaNacimiento: '1992-03-15', direccion: 'Avenida Siempre Viva 742', empleo: 'Diseñadora', fallecido: 'No' },
  { nombre: 'Carlos', apellido: 'Lopez', identificacion: '12398456', genero: 'Masculino', fechaNacimiento: '1985-07-20', direccion: 'Calle Falsa 123', empleo: 'Ingeniero', fallecido: 'No' },
  { nombre: 'Maria', apellido: 'Martinez', identificacion: '32165487', genero: 'Femenino', fechaNacimiento: '1991-11-11', direccion: 'Plaza Mayor 456', empleo: 'Abogada', fallecido: 'No' },
  { nombre: 'Luis', apellido: 'Rodriguez', identificacion: '456789123', genero: 'Masculino', fechaNacimiento: '1987-09-30', direccion: 'Calle del Sol 789', empleo: 'Médico', fallecido: 'No' },
  { nombre: 'Mario', apellido: 'Perez', identificacion: '14573789', genero: 'Masculino', fechaNacimiento: '1990-01-01', direccion: 'Calle 13', empleo: 'Programador', fallecido: 'No' },
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
  // dialog: any;
  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  editRow(row: Person) {
    console.log('Edit row', row);
  }

  deleteRow(row: Person) {
    console.log('Delete row', row);
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditModal(row: Person) {
    const dialogRef = this.dialog.open(FormComponent, {
      data: row
      

    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.findIndex(person => person.identificacion === row.identificacion);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }
}

  
