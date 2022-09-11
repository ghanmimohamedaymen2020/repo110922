import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user/user-auth.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router ,
    private userAuthServices : UserAuthService , 
    private userService : UserService ) { }

  ngOnInit(): void {
  }
  public isloggedIn(){
    
      
    return this.userAuthServices.isLoggedIn();
}

public logout(){

  this.userAuthServices.clear();
  this.router.navigate(['/userList']);
 // location.reload();
}

public getRoleAdmin() : boolean{

 return this.userService.roleMatch(['Admin'])
  
}
public getRoleUser() : boolean{

 return this.userService.roleMatch(['User'])
  
}
isHomeRoute() {

  if (this.router.url === '/app-login')
  return true;
}


}
