import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { authCodeFlowConfig } from '../config-auth-config/authCodeFlowConfig';
import { LoaderService } from '../services/loader.service';
import { OauthConect } from '../services/oauthConect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loginFormValid: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private oauthService: OAuthService,
    private oauthConect: OauthConect,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private routeRe: Router
  ) { 
    console.log('++++',authCodeFlowConfig);
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocument();
  }

  ngOnInit(): void {
    this.initFormLogin();
  }
  initFormLogin() {
    this.loginForm = this.formBuilder.group({
      user: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3)]),
      pass: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(5)]),
    })
  }
  resetFormValidFarmaVigExterno() {
    this.loginForm.reset();
  }
  ingresar() {
    let datos = this.loginForm.value;
    console.log(datos);
    let data = {
      client_id: environment.OAUTH2CLIENTID,
      username: datos.user,
      password: datos.pass,
      grant_type: 'password'
    }
    this.loaderService.show();
    this.oauthService
    .fetchTokenUsingPasswordFlowAndLoadUserProfile(
      datos.user,
      datos.pass
    )
    .then(() => {
      console.log('successfully logged in');
      //this.loginFailed = false;
      this.loaderService.hide();
      this.routeRe.navigate(['incio']);
    })
    .catch(err => {
      console.log('error logging in', err);
      //this.loginFailed = true;
      this.loaderService.hide();
    });
    /*

    this.oauthConect.enviarDatosLogin(data).subscribe(response => {
      this.messageService.add({ severity: 'success', summary: 'Datos correctos', detail: 'Usurio valido.' });
      this.loaderService.hide();
      console.log(response);
      //this.routeRe.navigate(['incio']);
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Datos incorrectos.' });
        this.loaderService.hide();
      });*/

  }
  onSubmit() {
    this.loginFormValid = true;
    if (this.loginForm.valid) {
      this.ingresar();
      return;
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Datos incorrectos.' });
    }
  }

}
