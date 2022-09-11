import { Component,  OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Programe } from '../models/programe';
  import { MessageServicService } from '../services/MessageService/message-servic.service';
  import { ProgramListeService } from '../services/programListe/program-liste.service';


  @Component({
    selector: 'app-liste-prog',
    templateUrl: './liste-prog.component.html',
    styleUrls: ['./liste-prog.component.css']
  })
  export class ListeProgComponent implements OnInit {

  ListeProgrames : Programe[] ;
    programeFromListePrograme: Programe  ;
    message : string

    constructor(private serviceListPrograme : ProgramListeService , private router : Router, private _messageService : MessageServicService) { }

    ngOnInit(): void {
      this.getPrograme()
    }
    getPrograme() {
      return this.serviceListPrograme.getListePrograme().subscribe(data=> this.ListeProgrames = data )
        }
     

sendObjectToDetail(message){
  this._messageService.sendMessage(message)
}







sendProgrammeNameTodetail(message){
  return this._messageService.sendNamePrograme(this.message)
}

        
        
  }
