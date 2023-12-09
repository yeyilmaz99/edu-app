import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { getInitialProgramsState } from './state/program.selector';
import { Program } from 'src/app/models/program.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs:Observable<Program[]>;



  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.programs = this.store.select(getInitialProgramsState)

  }

}
