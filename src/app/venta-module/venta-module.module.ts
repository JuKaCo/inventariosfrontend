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

import { VentaModuleRoutingModule } from './venta-module-routing.module';
import { ListadoCotizacionComponent } from './cotizacion/listado-cotizacion/listado-cotizacion.component';
import { FormularioCotizacionComponent } from './cotizacion/formulario-cotizacion/formulario-cotizacion.component';
import { ViewCotizacionItemCotizacionComponent } from './cotizacion/view-cotizacion-item-cotizacion/view-cotizacion-item-cotizacion.component';
import { DatosGeneralesCotizacionComponent } from './cotizacion/formulario-cotizacion/datos-generales-cotizacion/datos-generales-cotizacion.component';
import { DatosItemCotizacionComponent } from './cotizacion/formulario-cotizacion/datos-item-cotizacion/datos-item-cotizacion.component';
import { DocumentosCotizacionComponent } from './cotizacion/formulario-cotizacion/documentos-cotizacion/documentos-cotizacion.component';
import { TerminarCotizacionComponent } from './cotizacion/formulario-cotizacion/terminar-cotizacion/terminar-cotizacion.component';
import { FormItemCotizacionComponent } from './cotizacion/formulario-cotizacion/datos-item-cotizacion/form-item-cotizacion/form-item-cotizacion.component';


@NgModule({
  declarations: [
    ListadoCotizacionComponent,
    FormularioCotizacionComponent,
    ViewCotizacionItemCotizacionComponent,
    DatosGeneralesCotizacionComponent,
    DatosItemCotizacionComponent,
    DocumentosCotizacionComponent,
    TerminarCotizacionComponent,
    FormItemCotizacionComponent
  ],
  imports: [
    CommonModule,
    VentaModuleRoutingModule,
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
    DividerModule,
    StepsModule,
    CalendarModule,
    InputNumberModule
  ]
})
export class VentaModuleModule { }
