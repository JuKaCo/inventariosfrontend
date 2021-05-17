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


@NgModule({
  declarations: [
    ListadoCotizacionComponent,
    FormularioCotizacionComponent
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
