import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user/user';
import { ServiceUserService } from '../services/user/service-user.service';


@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  })
  export class UserListComponent implements OnInit {

    users: User[];
 
    constructor(private userServices: ServiceUserService , private route : Router) { }

    ngOnInit(): void {
     
      this.getUser();

    }
      private getUser(){
        this.userServices.getUserList().subscribe(data => 
        this.users = data     
        );


      }

      updateUser(id : string){
        this.route.navigate(['update-user/',id])
      }
      
      delateUser(id : string){
        this.userServices.deletUser(id).subscribe(data=>{
          console.log(data);
          this.getUser();
        })
      }
      
       

      }
