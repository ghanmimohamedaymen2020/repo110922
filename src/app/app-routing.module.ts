import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { FicheInterventionComponent } from './fiche-intervention/fiche-intervention.component';
import { HomeComponent } from './home/home.component';
import { ListeFicheInterventionComponent } from './liste-fiche-intervention/liste-fiche-intervention.component';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {path: 'listeProgram',component : HomeComponent},
  {path : 'createFicheIntervention' ,component : FicheInterventionComponent},
  {path:'ListeIncient', component: ListeFicheInterventionComponent},
  {path:'createUser',component: CreateUserComponent},
  {path:'userList', component: UserListComponent},
  {path:'login', component: LoginComponent},
  {path: 'update-user/:id',component:UpdateUserComponent},
  {path : 'detate-user/:id' , redirectTo :'users'},
  {path : 'createNewUser', component : CreateUserComponent  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
