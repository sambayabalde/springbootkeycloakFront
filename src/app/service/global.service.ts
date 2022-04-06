import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  keycloakServer: string = "http://localhost:8080";
  urlApi: string = "http://localhost:8081";
  token_endpoint: string = this.keycloakServer + "/realms/keycloakspringboot-realm/protocol/openid-connect/token"

  userConnected: any;

  // showLoading
  showLoad$ = new BehaviorSubject<boolean>(false);
  showLoad = this.showLoad$.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(environment.access_token)}`
    })
  };

  showLoading() {
    this.showLoad$.next(true);
  }
  hideLoading() {
    this.showLoad$.next(false);
  }
  constructor() { }

  isLogin() {
    if (localStorage.getItem(environment.access_token) != null) {
      return true;
    }
    return false;
  }
}
