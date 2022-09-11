import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassFicheIntervention } from '../models/class-fiche-intervention';
import { FicheInterventionService } from '../services/fiche-intervention.service';
import { MessageServicService } from '../services/MessageService/message-servic.service';

@Component({
  selector: 'app-liste-fiche-intervention',
  templateUrl: './liste-fiche-intervention.component.html',
  styleUrls: ['./liste-fiche-intervention.component.css']
})
export class ListeFicheInterventionComponent implements OnInit {

  ficheInterventions : ClassFicheIntervention[]
  constructor(private _FicheInterventionService : FicheInterventionService , private router : Router ,
     private  _messageService : MessageServicService ) { }

  ngOnInit(): void {
    this.getFicheIntervention()
  }

  private getFicheIntervention(){
    this._FicheInterventionService.getListClassFicheIntervention().subscribe(data=>
      this.ficheInterventions = data 
    )}
 
    updateFicheIntervention(id : number){
     this.router.navigate(['update-user/',id])
   }

   sendObjectToDetail(message){
    this._messageService.sendMessage(message)
  }
  

}
