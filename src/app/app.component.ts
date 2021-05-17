import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './general/config-auth-config/authCodeFlowConfig';
import { PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ceass-front-end';
  constructor(
    private router: Router,
    private _oAuthService: OAuthService,
    private config: PrimeNGConfig
  ) {

    if (router.url == '/') {
      var element = document.getElementById("principal");
      if (element != null) {
        element.classList.add("conten-login");
      }
    }


    /*for (let entry of Object.keys(localStorage)) {
      let data: any = localStorage.getItem(entry);
      sessionStorage.setItem(entry, data);
    }*/
    this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.loadDiscoveryDocument();
    this._oAuthService.setupAutomaticSilentRefresh();
  }
  ngOnInit() {
    this.config.setTranslation(environment.lang);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
