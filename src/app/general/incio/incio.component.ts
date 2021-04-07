import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { MenuItem, MessageService } from 'primeng/api';
import { authCodeFlowConfig } from '../config-auth-config/authCodeFlowConfig';
import { Auth } from '../services/Auth.service';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.scss']
})
export class IncioComponent implements OnInit {
  itemsMenu: MenuItem[] = [];
  itemsUsuario: MenuItem[] = [];
  itemsMenuDisplay: boolean = true;
  datosUsuario: any;
  constructor(
    private oAuthService: OAuthService,
    private _router: Router,
    private messageService: MessageService,
    private generalService: GeneralService,
  ) {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocument();
    this.oAuthService.setupAutomaticSilentRefresh();
  }

  ngOnInit(): void {
    this.getDatosUsuario();
    this.itemsUsuario = [
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user-edit',
        command: () => this.editUsuario()
      },
      {
        label: 'Cerra sesión',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.logOut()
      }

    ];

    if (sessionStorage.getItem("menu_gen") === null) {
      this.generalService.getMenu().subscribe(response => {
        if (response.success) {
          this.itemsMenu = response.data;
          sessionStorage.setItem("menu_gen", JSON.stringify(response.data))
        } else {
          this.itemsMenu = [];
        }
      },
        error => {
        });
    } else {
      let dataMenu: any = sessionStorage.getItem("menu_gen");
      var obj = JSON.parse(dataMenu);
      console.log('----->>>', obj);
      this.itemsMenu = obj;
    }
  }

  verMenu() {
    if (this.itemsMenuDisplay) {
      this.itemsMenuDisplay = false;
    } else {
      this.itemsMenuDisplay = true;
    }
  }
  activeMenu(event: any) {
    sessionStorage.setItem("menu_gen", JSON.stringify(this.itemsMenu))
  }
  editUsuario() {

  }
  getDatosUsuario() {
    this.datosUsuario = this.oAuthService.getIdentityClaims();
  }
  logOut() {
    this.oAuthService.revokeTokenAndLogout();
    localStorage.clear();
    sessionStorage.clear();
    this._router.navigate(['']);
  }
}
