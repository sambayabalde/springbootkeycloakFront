import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RealmModel } from '../models/realm-model';
import { EmployeService } from '../service/employe.service';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  message = "";
  constructor(private formBuilder: FormBuilder,
    private employeeService: EmployeService,
    private router: Router,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    // this.globalService.showLoading();
    this.initForm();
    // this.globalService.hideLoading();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      "login": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.globalService.showLoading();
    var data = new RealmModel();

    data.username = this.loginForm.get('login')?.value;
    data.password = this.loginForm.get('password')?.value;

    this.employeeService.login(data).subscribe((res: any) => {
      localStorage.clear();

      localStorage.setItem(environment.access_token, res.access_token);
      localStorage.setItem(environment.refresh_token, res.refresh_token);
      this.globalService.hideLoading();
      this.router.navigate(['/listeEmployees'])
    }, (err: any) => {
      console.log(err);
      this.message = err.error.error_description;
      this.globalService.hideLoading();
    })
  }

}
