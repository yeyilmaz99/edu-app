import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ProgramComponent } from './components/programs/program/program.component';

const routes: Routes = [
  {path:'', pathMatch:"full", component:HomeComponent},
  {path:"programs", loadChildren:() => import('./components/programs/programs.module').then(m => m.ProgramsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
