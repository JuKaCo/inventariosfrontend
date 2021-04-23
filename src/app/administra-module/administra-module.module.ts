import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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


//importar componente general
import { GeneralModuleModule } from '../general-module/general-module.module';


import { AdministraModuleRoutingModule } from './administra-module-routing.module';
import { ListadoLinameComponent } from './liname/listado-liname/listado-liname.component';
import { ListadoLinadimeComponent } from './linadime/listado-liname/listado-linadime.component';


@NgModule({
  declarations: [
    ListadoLinameComponent,
    ListadoLinadimeComponent
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
    MessageModule
  ]
})
export class AdministraModuleModule { }
