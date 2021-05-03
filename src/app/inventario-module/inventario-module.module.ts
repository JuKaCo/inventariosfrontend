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
import {DividerModule} from 'primeng/divider';

import { GeneralModuleModule } from '../general-module/general-module.module';

import { InventarioModuleRoutingModule } from './inventario-module-routing.module';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { FormularioProductoComponent } from './producto/formulario-producto/formulario-producto.component';
import { FormularioRegionalComponent } from './regional/formulario-regional/formulario-regional.component';
import { ListadoRegionalComponent } from './regional/listado-regional/listado-regional.component';


@NgModule({
  declarations: [
    ListadoProductoComponent,
    FormularioProductoComponent,
    FormularioRegionalComponent,
    ListadoRegionalComponent
  ],
  imports: [
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
    AutoCompleteModule,
    InventarioModuleRoutingModule,
    DividerModule
  ]
})
export class InventarioModuleModule { }
