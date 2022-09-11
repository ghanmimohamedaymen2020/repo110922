import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { ClassFicheIntervention } from '../models/class-fiche-intervention';
import { MessageServicService } from '../services/MessageService/message-servic.service';

@Component({
  selector: 'app-print-fiche-intervention',
  templateUrl: './print-fiche-intervention.component.html',
  styleUrls: ['./print-fiche-intervention.component.css']
})
export class PrintFicheInterventionComponent implements OnInit {
_ficheIntervention : ClassFicheIntervention
  constructor(private _messageService : MessageServicService) { }

  ngOnInit(): void {
    
 

  }

 
 
}
