import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user/user-auth.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userServices : UserService , 
    private userAuthService : UserAuthService ,private router : Router) { }

  ngOnInit(): void {
  }
  login(loginForm:NgForm){
    this.userServices.login(loginForm.value).subscribe(
      (response:any)=> {

        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        console.log(response)
        const role = response.user.role[0].roleName ;
        if( role === 'Admin'){
          this.router.navigate(['/users'])
        }else {
          this.router.navigate(['/listeProgram'])

        }
      },
      (error)=> {
        console.log(error)
      } 
    )
  }

}
