import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from "@ngrx/store";
import { PROGRAM_STATE } from "./state/program.selector";
import { programReducer } from "./state/program.reducer";
import { ProgramsComponent } from "./programs.component";
import { ProgramComponent } from "./program/program.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatRadioModule } from "@angular/material/radio";
import { ProgramEffects } from "./state/program.effects";
import { AddProgramComponent } from "./add-program/add-program.component";
import { HttpClientModule } from "@angular/common/http";



const routes: Routes = [

    {path: '', children: [
        { path: '', pathMatch:'full',component:ProgramsComponent},
        { path: 'program/:id', pathMatch:'full',component:ProgramComponent },
        {path: 'add', component:AddProgramComponent}
    ]}
]



@NgModule({
    declarations: [
        ProgramComponent,
        AddProgramComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatRadioModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDividerModule,
        ReactiveFormsModule,
        FormsModule,
        MatPaginatorModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([ProgramEffects]),
        StoreModule.forFeature(PROGRAM_STATE,programReducer)
    ],

    providers:[]
})


export class ProgramsModule {

}