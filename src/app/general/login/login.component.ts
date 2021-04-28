import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { MessageService } from 'primeng/api';
import { authCodeFlowConfig } from '../config-auth-config/authCodeFlowConfig';
import { LoaderService } from '../services/loader.service';

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
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.oauthService.configure(authCodeFlowConfig);
    //this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocument();
    if(this.oauthService.hasValidAccessToken()){
      this._router.navigate(['inicio']);
    }
  }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
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
    this.loaderService.show();
    this.oauthService
      .fetchTokenUsingPasswordFlowAndLoadUserProfile(
        datos.user,
        datos.pass
      )
      .then(() => {
        this.loaderService.hide();
        //this.messageService.add({ severity: 'success', summary: 'Ingresar', detail: 'Datos correctos.' });

       /* for (let entry of Object.keys(sessionStorage)) {
          let data: any = sessionStorage.getItem(entry);
          localStorage.setItem(entry, data);
        }*/
        this._router.navigate(['inicio']);
      })
      .catch(err => {
        console.error('error logging in', err);
        this.loaderService.hide();
      });
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
