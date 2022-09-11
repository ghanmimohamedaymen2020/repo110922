import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  sendMessage = new Subject();


  constructor() { }
  
communicateMessage(msg){ 
  this.sendMessage.next(msg);
  console.log(msg)
}
}
