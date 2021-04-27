import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//primeng
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {AutoCompleteModule} from 'primeng/autocomplete';


//importar componente general
import { GeneralModuleModule } from '../general-module/general-module.module';


import { EntidadModuleRoutingModule } from './entidad-module-routing.module';
import { ListadoProveedorComponent } from './proveedor/listado-provedor/listado-proveedor.component';
import { FormularioProveedorComponent } from './proveedor/formulario-proveedor/formulario-proveedor.component';
import { ListadoClienteComponent } from './cliente/listado-cliente/listado-cliente.component';
import { FormularioClienteComponent } from './cliente/formulario-cliente/formulario-cliente.component';


@NgModule({
  declarations: [
    ListadoProveedorComponent,
    FormularioProveedorComponent,
    ListadoClienteComponent,
    FormularioClienteComponent
  ],
  imports: [
    EntidadModuleRoutingModule,
    CommonModule,
    GeneralModuleModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    DynamicDialogModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmPopupModule,
    ScrollPanelModule,
    TagModule,
    MessagesModule,
    MessageModule,
    AutoCompleteModule
  ]
})
export class EntidadModuleModule { }
