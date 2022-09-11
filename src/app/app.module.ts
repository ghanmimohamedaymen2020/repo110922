import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { DetailProgramComponent } from './detail-program/detail-program.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FicheInterventionComponent } from './fiche-intervention/fiche-intervention.component';
import { ListeFicheInterventionComponent } from './liste-fiche-intervention/liste-fiche-intervention.component';
import { PrintFicheInterventionComponent } from './print-fiche-intervention/print-fiche-intervention.component';
import { NgxPrintModule } from 'ngx-print';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeProgComponent } from './liste-prog/liste-prog.component';
import { NgChartsModule } from 'ng2-charts';
import dateFormat, { masks } from "dateformat";
import { LineSeries } from '@syncfusion/ej2-charts';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    CreateUserComponent,
    AppComponent,
    HomeComponent,
    ListeProgComponent,
    ProgramComponent,
    DetailProgramComponent,
    NavbarComponent,
    FicheInterventionComponent,
    ListeFicheInterventionComponent,
    PrintFicheInterventionComponent,
    LoginComponent,
    UserListComponent,
    UpdateUserComponent,
    

    
  ],
  imports: [
    NgChartsModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPrintModule,  ],
  providers: [],
  bootstrap: [AppComponent,LineSeries,DatePipe ]
})
export class AppModule { }
