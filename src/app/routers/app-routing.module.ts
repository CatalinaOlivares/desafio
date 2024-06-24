import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { RegistroComponent } from '../pages/registro/registro.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  // { path: '', redirectTo: '/inicio', pathMatch: 'full' },  
  // { path: '**', redirectTo: '/inicio' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
