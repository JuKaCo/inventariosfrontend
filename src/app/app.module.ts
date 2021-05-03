import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//general
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderService } from './general/services/loader.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//oauth2 open id
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
//primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { BadgeModule } from "primeng/badge";
import { TimelineModule } from "primeng/timeline";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DividerModule } from "primeng/divider";

//componentes
import { inicioComponent } from './general/inicio/inicio.component';
import { LoginComponent } from './general/login/login.component';
import { LoaderComponent } from './general/loader/loader.component';
import { environment } from 'src/environments/environment';
//import component
import { GeneralModuleModule } from './general-module/general-module.module';


@NgModule({
  declarations: [
    AppComponent,
    inicioComponent,
    LoginComponent,
    LoaderComponent,
  ],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: environment.OAUTH2OPENID,
        sendAccessToken: true
      }
    }),
    GeneralModuleModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    ProgressSpinnerModule,
    BlockUIModule,
    ToastModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PanelMenuModule,
    MenuModule,
    ConfirmPopupModule,
    BadgeModule,
    TimelineModule,
    OverlayPanelModule,
    DividerModule,
  ],
  exports: [
  ],
  providers: [LoaderService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
