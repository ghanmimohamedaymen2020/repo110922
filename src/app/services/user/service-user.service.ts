
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {


  private baseUrl :"http://localhost:9090/users";
                   
 

  constructor(private httpClient : HttpClient) { }

  getUserList():Observable<User[]>{
    
      return this.httpClient.get<User[]>('http://localhost:9090/users');
    }

    createUser(user: User) : Observable<Object>{
      return this.httpClient.post("http://localhost:9090/registerNewUser",user)

    }

  
    getUserById(id:string): Observable<User>{
      console.log(id)
      return this.httpClient.get<User>(`http://localhost:9090/users/${id}`)
    }

    updateUser(id : string , user :User):Observable<object>{
      return this.httpClient.put(`http://localhost:9090/users/${id}`,user);
    }

    deletUser(id : string): Observable<Object>{
 
      return this.httpClient.delete(`http://localhost:9090/users/${id}`)
    }
  }

