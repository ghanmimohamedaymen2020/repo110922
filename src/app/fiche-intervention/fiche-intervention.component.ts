import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassFicheIntervention } from '../models/class-fiche-intervention';
import { FicheInterventionService } from '../services/fiche-intervention.service';

@Component({
  selector: 'app-fiche-intervention',
  templateUrl: './fiche-intervention.component.html',
  styleUrls: ['./fiche-intervention.component.css']
})
export class FicheInterventionComponent implements OnInit {

  _ficheIntevention : ClassFicheIntervention = new ClassFicheIntervention 
  constructor(private _servicesFicheIntervention : FicheInterventionService , private router : Router) { }

  ngOnInit(): void {
  }
  saveFicheIntervention (){
    return this._servicesFicheIntervention.createClassFicheIntervention(this._ficheIntevention).
    subscribe({
      next:()=>{this.gotoFicheInternetionList},
      complete : ()=> {this.gotoFicheInternetionList();},
      error : ()=> {console.log(console.error()
      )}
    })

   
}

gotoFicheInternetionList(){
  this.router.navigate(['/ListeIncient'])
  }

  
OnSubmit(){
   
  console.log(this._ficheIntevention)
  this.saveFicheIntervention();
 }

}
