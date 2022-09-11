import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Programe } from '../models/programe';
import { ProgramListeService } from '../services/programListe/program-liste.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

   

  constructor() { }

  ngOnInit(): void {
  }


}
