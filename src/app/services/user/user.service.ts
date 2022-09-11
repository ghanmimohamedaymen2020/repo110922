import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  PATH_OF_API ="http://localhost:9090"

 requestHeader = new HttpHeaders(
   {"No-Auth" : "True"}
 )
  constructor(private httpclient : HttpClient , private userAuthServices : UserAuthService) { }


      public login(loginData){
        return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData ,{ headers : this.requestHeader})
      }
      getUserList():Observable<User[]>{
      console.log(this.httpclient.get<User[]>('http://localhost:9090/users'));
        return this.httpclient.get<User[]>('http://localhost:9090/users');
      }



      public roleMatch(allowedRoles) : boolean {
        let isMatch = false 
        const userRoles : any = this.userAuthServices.getRoles();
        if (userRoles != null && userRoles){
          for (let i=0 ; i< userRoles.length; i++){
            for (let j =0 ; j < allowedRoles.length;j++){

              if (userRoles[i].roleName ===  allowedRoles[j]){
              isMatch = true 
              return isMatch
            } else {
              return isMatch;
            }
          }
        }
      
      }
  }

}

