import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  
})
export class FormComponent {
  form: FormGroup;
  @Input() regitroForm: string = '';

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      nombre: [data.nombre ],
      apellido: [data?.apellido],
      identificacion: [data?.identificacion],
      genero: [data?.genero],
      fechaNacimiento: [data?.fechaNacimiento],
      direccion: [data?.direccion],
      empleo: [data?.empleo],
      fallecido: [data?.fallecido],
    });

    console.log(this.regitroForm);
  }
    /*
  onSubmit() {
    const rutValido = this.validarRut(this.form.value.identificacion);
    if (rutValido) {
      this.dialogRef.close(this.form.value);
    }
    else{
      alert('Rut no valido');
      return; 
  }
  }
 */
  onSubmit() {
    const rutValido = this.validarRut(this.form.value.identificacion);
    if (!rutValido) {
      alert('RUT no válido');
      return; 
    }

    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  

 onClosed() {
    console.log('closed');
 }



validarRut(identificacion: string): boolean {
  identificacion = identificacion.replace(/\./g, '').replace(/-/g, '');

  if (identificacion.length < 2) {
    return false;
  }

  const numero = identificacion.slice(0, -1);
  const digitoVerificador = identificacion.slice(-1).toLowerCase();

  const calculado = this.calcularVerificador(numero);

  return calculado === digitoVerificador;
}

calcularVerificador(numero: string): string {
  let sum = 0;
  let mul = 2;

// Iterar sobre cada dígito del número en orden inverso
for (let i = numero.length - 1; i >= 0; i--) {
  sum += parseInt(numero.charAt(i), 10) * mul;
  if (mul < 7) {
    mul++;
  } else {
    mul = 2;
  }
}


const res = 11 - (sum % 11);

if (res === 11) {
  return '0';
} else if (res === 10) {
  return 'k';
} else {
  return res.toString();
}
}
}