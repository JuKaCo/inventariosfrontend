import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//general
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderService } from './general/services/loader.service';
//primeng
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';
//componentes
import { IncioComponent } from './general/incio/incio.component';
import { LoginComponent } from './general/login/login.component';
import { MesajeFormErrorComponent } from './general/mesaje-form-error/mesaje-form-error.component';
import { LoaderComponent } from './general/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    LoginComponent,
    MesajeFormErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    ProgressSpinnerModule,
    BlockUIModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
