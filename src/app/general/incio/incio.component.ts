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
  constructor(
    private _oAuthService: OAuthService,
    private _router: Router,
    private messageService: MessageService,
    private generalService: GeneralService,
  ) {
    this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.loadDiscoveryDocument();
    this._oAuthService.setupAutomaticSilentRefresh();
  }

  ngOnInit(): void {

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


   
    this.generalService.getMenu().subscribe(response => {
      if (response.success) {
        this.itemsMenu=response.data;
      } else {
      }
    },
      error => {
      });
  }

  verMenu() {
    if (this.itemsMenuDisplay) {
      this.itemsMenuDisplay = false;
    } else {
      this.itemsMenuDisplay = true;
    }
  }
  editUsuario() {

  }
  logOut() {
    this._oAuthService.revokeTokenAndLogout();
    localStorage.clear();
    this._router.navigate(['']);
  }
}
