import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeService } from '../service/employe.service';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  signinForm!: FormGroup;
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
    this.signinForm = this.formBuilder.group({
      "username": new FormControl('', Validators.required),
      "firstname": new FormControl('', Validators.required),
      "lastname": new FormControl('', Validators.required),
      "email": new FormControl('', Validators.required),
      "role": new FormControl('', Validators.required),

    });
  }
  save() {
    
  }

}
