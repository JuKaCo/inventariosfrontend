import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { MenuItem, MessageService } from 'primeng/api';
import { authCodeFlowConfig } from '../config-auth-config/authCodeFlowConfig';

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
  ) { 
    this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.loadDiscoveryDocument();
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


    this.itemsMenu = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];
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
    this._router.navigate(['']);
  }
}
