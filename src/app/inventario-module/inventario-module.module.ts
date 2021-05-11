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
import {StepsModule} from 'primeng/steps';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';

import { GeneralModuleModule } from '../general-module/general-module.module';

import { InventarioModuleRoutingModule } from './inventario-module-routing.module';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { FormularioProductoComponent } from './producto/formulario-producto/formulario-producto.component';
import { FormularioRegionalComponent } from './regional/formulario-regional/formulario-regional.component';
import { ListadoRegionalComponent } from './regional/listado-regional/listado-regional.component';
import { ListadoProgramaComponent } from './programa/listado-programa/listado-programa.component';
import { FormularioProgramaComponent } from './programa/formulario-programa/formulario-programa.component';
import { ListadoAlmacenComponent } from './almacen/listado-almacen/listado-almacen.component';
import { FormularioAlmacenComponent } from './almacen/formulario-almacen/formulario-almacen.component';
import { ListadoEntradaComponent } from './entrada/listado-entrada/listado-entrada.component';
import { FormularioEntradaComponent } from './entrada/formulario-entrada/formulario-entrada.component';
import { DatosGeneralesEntradaComponent } from './entrada/formulario-entrada/datos-generales-entrada/datos-generales-entrada.component';
import { DatosItemEntradaComponent } from './entrada/formulario-entrada/datos-item-entrada/datos-item-entrada.component';
import { DocumentosEntradaComponent } from './entrada/formulario-entrada/documentos-entrada/documentos-entrada.component';
import { TerminarEntradaComponent } from './entrada/formulario-entrada/terminar-entrada/terminar-entrada.component';
import { ListadoCompraComponent } from './compra/listado-compra/listado-compra.component';
import { FormularioCompraComponent } from './compra/formulario-compra/formulario-compra.component';
import { FormItemEntradaComponent } from './entrada/formulario-entrada/datos-item-entrada/form-item-entrada/form-item-entrada.component';


@NgModule({
  declarations: [
    ListadoProductoComponent,
    FormularioProductoComponent,
    FormularioRegionalComponent,
    ListadoRegionalComponent,
    ListadoProgramaComponent,
    FormularioProgramaComponent,
    ListadoAlmacenComponent,
    FormularioAlmacenComponent,
    ListadoEntradaComponent,
    FormularioEntradaComponent,
    DatosGeneralesEntradaComponent,
    DatosItemEntradaComponent,
    DocumentosEntradaComponent,
    TerminarEntradaComponent,
    ListadoCompraComponent,
    FormularioCompraComponent,
    FormItemEntradaComponent
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
    DividerModule,
    StepsModule,
    CalendarModule,
    InputNumberModule
  ]
})
export class InventarioModuleModule { }
