import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springbotkeycloakFront';
  showLoading?: boolean = false

  constructor(public svcGlobal: GlobalService,
    private router: Router,
    private spinner: NgxSpinnerService) {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  ngAfterViewInit() {
    this.svcGlobal.showLoad.subscribe(
      (val: boolean) => {
        this.showLoading = val;
        if (this.showLoading) {
          this.spinner.show();
        } else {
          this.spinner.hide();
        }
      });
  }
}
