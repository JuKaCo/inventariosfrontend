import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {TabViewModule} from 'primeng/tabview';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';


//importar componente general
import { GeneralModuleModule } from '../general-module/general-module.module';


import { AdministraModuleRoutingModule } from './administra-module-routing.module';
import { ListadoLinameComponent } from './liname/listado-liname/listado-liname.component';
import { ListadoLinadimeComponent } from './linadime/listado-linadime/listado-linadime.component';
import { FormularioDosificacionComponent } from './dosificacion/formulario-dosificacion/formulario-dosificacion.component';
import { ListadoDosificacionComponent } from './dosificacion/listado-dosificacion/listado-dosificacion.component';
import { ListadoActivoDosificacionComponent } from './dosificacion/listado-dosificacion/listado-activo-dosificacion/listado-activo-dosificacion.component';
import { ListadoInactivoDosificacionComponent } from './dosificacion/listado-dosificacion/listado-inactivo-dosificacion/listado-inactivo-dosificacion.component';


@NgModule({
  declarations: [
    ListadoLinameComponent,
    ListadoLinadimeComponent,
    FormularioDosificacionComponent,
    ListadoDosificacionComponent,
    ListadoActivoDosificacionComponent,
    ListadoInactivoDosificacionComponent
  ],
  imports: [
    CommonModule,
    GeneralModuleModule,
    FormsModule,
    ReactiveFormsModule,
    AdministraModuleRoutingModule,
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
    TabViewModule,
    AutoCompleteModule,
    CalendarModule
  ]
})
export class AdministraModuleModule { }
