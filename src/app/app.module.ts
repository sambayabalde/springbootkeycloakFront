import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EmployeService } from './service/employe.service';
import { GlobalService } from './service/global.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'listeEmployees', canActivate: [AuthGuard], component: EmployeeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeService, GlobalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
