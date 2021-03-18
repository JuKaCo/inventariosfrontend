import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
  }
  ingresar(){
    console.log('--->ingresar');
    this.loaderService.show();
  }
}
