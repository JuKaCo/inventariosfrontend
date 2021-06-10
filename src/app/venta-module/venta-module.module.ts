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
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {SplitterModule} from 'primeng/splitter';



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
import { ListaItemKardexCotizacionComponent } from './cotizacion/formulario-cotizacion/datos-item-cotizacion/lista-item-kardex-cotizacion/lista-item-kardex-cotizacion.component';
import { ListaItemCotizaKardexCotizacionComponent } from './cotizacion/formulario-cotizacion/datos-item-cotizacion/lista-item-cotiza-kardex-cotizacion/lista-item-cotiza-kardex-cotizacion.component';
import { ViewVentaItemVentaComponent } from './venta/view-venta-item-venta/view-venta-item-venta.component';
import { ListadoVentaComponent } from './venta/listado-venta/listado-venta.component';
import { FormularioVentaComponent } from './venta/formulario-venta/formulario-venta.component';
import { DatosGeneralesVentaComponent } from './venta/formulario-venta/datos-generales-venta/datos-generales-venta.component';
import { DatosItemVentaComponent } from './venta/formulario-venta/datos-item-venta/datos-item-venta.component';
import { FormItemVentaComponent } from './venta/formulario-venta/datos-item-venta/form-item-venta/form-item-venta.component';
import { ListaItemVentaKardexVentaComponent } from './venta/formulario-venta/datos-item-venta/lista-item-venta-kardex-venta/lista-item-venta-kardex-venta.component';
import { ListaItemKardexVentaComponent } from './venta/formulario-venta/datos-item-venta/lista-item-kardex-venta/lista-item-kardex-venta.component';
import { DocumentosVentaComponent } from './venta/formulario-venta/documentos-venta/documentos-venta.component';
import { TerminaVentaComponent } from './venta/formulario-venta/termina-venta/termina-venta.component';


@NgModule({
  declarations: [
    ListadoCotizacionComponent,
    FormularioCotizacionComponent,
    ViewCotizacionItemCotizacionComponent,
    DatosGeneralesCotizacionComponent,
    DatosItemCotizacionComponent,
    DocumentosCotizacionComponent,
    TerminarCotizacionComponent,
    FormItemCotizacionComponent,
    ListaItemKardexCotizacionComponent,
    ListaItemCotizaKardexCotizacionComponent,
    ViewVentaItemVentaComponent,
    ListadoVentaComponent,
    FormularioVentaComponent,
    DatosGeneralesVentaComponent,
    DatosItemVentaComponent,
    FormItemVentaComponent,
    ListaItemVentaKardexVentaComponent,
    ListaItemKardexVentaComponent,
    DocumentosVentaComponent,
    TerminaVentaComponent,
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
    InputNumberModule,
    DataViewModule,
    DropdownModule,
    SplitterModule
  ]
})
export class VentaModuleModule { }
