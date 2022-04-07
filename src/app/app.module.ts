import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'listeEmployees',
    // canActivate: [AuthGuard], 
    component: EmployeeComponent
  },
];

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'keycloakspringboot-realm',
        clientId: 'keycloakspringboot'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
        // flow: 'standard'
        // silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html'
      },
      // bearerExcludedUrls: ['/assets', '/', '/clients /public']
    });
}

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
    KeycloakAngularModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeService, GlobalService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
