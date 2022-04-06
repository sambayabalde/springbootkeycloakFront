import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RealmModel } from '../models/realm-model';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  body = new URLSearchParams();
  constructor(private httpClient: HttpClient, private globalService: GlobalService) { }

  public login(data: RealmModel) {
    this.body.set('client_id', data.client_id);
    this.body.set('username', data.username);
    this.body.set('password', data.password);
    this.body.set('grant_type', data.grant_type);
    return this.httpClient.post(this.globalService.token_endpoint, this.body.toString(), this.httpOptions);
  }
}
