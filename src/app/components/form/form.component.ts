import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  
})
export class FormComponent {
  form: FormGroup;
/*
 constructor(private fb: FormBuilder) {
   this.form = this.fb.group({
     nombre: ['', Validators.required],
     apellido: ['', Validators.required],
     identificacion: ['', Validators.required],
     genero: ['', Validators.required],
     fechaNacimiento: ['', Validators.required],
     direccion: ['', Validators.required],
     empleo: ['', Validators.required],
     estado: ['', Validators.required],
     agree: [false, Validators.requiredTrue],
   });
 }
*/
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      nombre: [data?.nombre ],
      apellido: [data?.apellid],
      identificacion: [data?.identificacion],
      genero: [data?.genero],
      fechaNacimiento: [data?.fechaNacimiento],
      direccion: [data?.direccion],
      empleo: [data?.empleo],
      fallecido: [data?.fallecido],
    });
  }
    
  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
  
 onSubmmit() {
    console.log(this.form.value);
 }
 onClosed() {
    console.log('closed');
 }

}
