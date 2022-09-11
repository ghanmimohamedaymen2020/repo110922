import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Programe } from 'src/app/models/programe';

@Injectable({
  providedIn: 'root'
})
export class MessageServicService {
 
   sendObject = new Subject<any>();
message : string

  constructor() { }

  // communicateObject(obj) {
  //     this.sendObject.next(obj);
  // }
  sendMessage(msg :any){
this.sendObject.next(msg)
  }
  reciveidMessage() : Observable<any>{
return this.sendObject.asObservable() 
  }




  sendNamePrograme(message){
return this.message
  }


recieveMessage(){
  return this.message
}

}