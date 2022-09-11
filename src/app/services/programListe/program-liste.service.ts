import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Programe } from 'src/app/models/programe';


@Injectable({
  providedIn: 'root'
})
export class ProgramListeService {
 

  constructor(private http : HttpClient) { }


  
  public getListeProgrameByName(prog : string):Observable<Programe[]> {
   
    console.log(this.http.get<Programe[]>(`http://localhost:8082/DetailleTFJ/${prog}/prog`))
    return this.http.get<Programe[]>(`http://localhost:8082/DetailleTFJ/${prog}/prog`)
  
  }

  /*
  
    getUserById(id:string): Observable<User>{
      console.log(id)
      return this.httpClient.get<User>(`http://localhost:9090/users/${id}`)
    }
  }
  */
  
  
  public getListePrograme():Observable<Programe[]> {
    console.log(this.http.get<Programe[]>("http://localhost:8082/DetailleTFJ"));
      return this.http.get<Programe[]>("http://localhost:8082/DetailleTFJ");
          
    }


}

/**
 * name
 */
