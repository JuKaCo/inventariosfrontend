import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { MenuItem, MessageService } from 'primeng/api';
import { FocusTrap } from 'primeng/focustrap';
import { BreadcrumbGeneralComponent } from '../breadcrumb-general/breadcrumb-general.component';
import { authCodeFlowConfig } from '../config-auth-config/authCodeFlowConfig';
import { Auth } from '../services/Auth.service';
import { GeneralService } from '../services/general.service';
import { LoaderService } from '../services/loader.service';

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
  notificaciones: any;
  nroNotificacionesPendient: any;
  nroNotificaciones: any;
  mostrarLetras: boolean = false;
  validaNotificacion: any = [];
  @ViewChild('breadcrumbGeneral') breadcrumbGeneral: BreadcrumbGeneralComponent | undefined;

  constructor(
    private oAuthService: OAuthService,
    private _router: Router,
    private messageService: MessageService,
    private generalService: GeneralService,
    private loaderService: LoaderService,
  ) {
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.loadDiscoveryDocument();
    this.oAuthService.setupAutomaticSilentRefresh();
  }

  ngOnInit(): void {

    this.getDatosUsuario();
    this.getListaNotificacion();
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
      this.loaderService.show();
      this.generalService.getMenu().subscribe(response => {
        if (response.success) {
          this.loaderService.hide();
          this.itemsMenu = response.data;
          sessionStorage.setItem("menu_gen", JSON.stringify(response.data))
          this.breadcrumbGeneral?.cargar();
        } else {
          this.itemsMenu = [];
        }
      },
        error => {
        });
    } else {
      let dataMenu: any = sessionStorage.getItem("menu_gen");
      var obj = JSON.parse(dataMenu);
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

  getListaNotificacion() {
    this.generalService.getListaNotificacion()
      .subscribe(response => {
        if (response.success) {
          this.notificaciones = response.data;
          let notificacionesRencientes = 0;
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i]['confirmacion'] == '0') {
              notificacionesRencientes ++;
            }
          }
          this.nroNotificacionesPendient = notificacionesRencientes;
          this.nroNotificaciones = response.data.length;
        }
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Listado liname', detail: 'Error al consumir el servicio.' });
      });
  }

  getIndexNotifi(i:any) {

  }

  eliminaNotificacion(id: number){
    this.generalService.inactivaNotificacion(id)
      .subscribe(response => {
        if (response.success) {
          this.getListaNotificacion();
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Listado liname', detail: 'Error al consumir el servicio.' });
      });
  }

  mostrar(id_notifi: number, i: number) {
    this.generalService.confirmaNotificacion(id_notifi)
      .subscribe(response => {
        if (response.success) {
          this.getListaNotificacion();
          this.validaNotificacion[i] = !this.validaNotificacion[i];
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Listado liname', detail: 'Error al consumir el servicio.' });
      });
  }
  validNotificacion(i:number) : boolean{
    if (this.validaNotificacion[i] != null) {
      return this.validaNotificacion[i];
    } else{
      return this.validaNotificacion[i] = false;;
    }
  }

  verNotificaciones() {
    this._router.navigate(['notificacion']);
  }
}
