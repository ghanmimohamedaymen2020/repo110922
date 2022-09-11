import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassFicheIntervention } from '../models/class-fiche-intervention';

@Injectable({
  providedIn: 'root'
})
export class FicheInterventionService {

  constructor(private http : HttpClient) { }

  public getListClassFicheIntervention():Observable<ClassFicheIntervention[]> {
  console.log(this.http.get<ClassFicheIntervention[]>("http://localhost:8082/ListOfFichesInterventions"));
    return this.http.get<ClassFicheIntervention[]>("http://localhost:8082/ListOfFichesInterventions");
    
  
  
  }


  updateClassFicheIntervention(id : number):Observable<ClassFicheIntervention[]>{
    return this.http.put<ClassFicheIntervention[]>("http://localhost:8080",id)
  }
  
  createClassFicheIntervention(ClassFicheIntervention : ClassFicheIntervention): Observable<Object>{
    return this.http.post("http://localhost:8082/addNewFicheIntervention",ClassFicheIntervention)
  
  }
  getClassFicheInterventionById(id:number): Observable<ClassFicheIntervention>{
    console.log(id)
    return this.http.get<ClassFicheIntervention>(`http://localhost:8080/${id}`)
  }
  
}
