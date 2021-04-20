import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload/fileupload';
import { MessageService, ConfirmationService } from 'primeng/api';
import { LinameService } from '../service/liname.service';
import { Table } from 'primeng/table/table';

@Component({
  selector: 'app-listado-liname',
  templateUrl: './listado-liname.component.html',
  styleUrls: ['./listado-liname.component.scss']
})
export class ListadoLinameComponent implements OnInit {
  displayFrmUpload: boolean = false;
  uploadForm!: FormGroup;
  uploadFormValid: boolean = false;
  autoResize = true;
  datosValidosExcel: any = null;

  uploadConfirmModal: boolean = false;
  displayModalCargarDatos: boolean = false;


  totalRecords: number = 0;
  loading: boolean = false;
  rows: number = 10;
  first: number = 0;

  listaLiname: any = [];


  @ViewChild('dt') dt!: Table;
  @ViewChild('fubauto') fubauto!: FileUpload;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private linameService: LinameService
  ) { }

  ngOnInit(): void {
    this.initFormValidUpload();
  }

  loadData(event: LazyLoadEvent) {
    this.loading = true;
    this.listaLiname = [];
    let dataTable = { 'inicio': event.first, 'cantidad': event.rows, 'filtro': event.globalFilter };
    this.linameService.getListaLiname(dataTable).subscribe(response => {
      if (response.success) {
        this.listaLiname = response.data;
        this.loading = false;
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Listado liname', detail: 'Error al consumir el servicio.' });
      });
  }
  reset() {
    this.first = 0;
  }
  dialogAddLiname() {
    this.displayFrmUpload = true;
    this.resetFormValidUpload();
  }
  initFormValidUpload() {
    this.uploadForm = this.formBuilder.group({});
    this.uploadForm.addControl('comentarios', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.uploadForm.addControl('archivo', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.uploadFormValid = false;
    this.displayFrmUpload = false;
  }
  updateUpload(dato: any) {
    let comen = this.uploadForm.value['comentarios'];
    this.uploadForm.setValue({ comentarios: comen, archivo: dato });
  }
  resetFormValidUpload() {
    this.uploadForm.reset();
    this.uploadFormValid = false;
    this.fubauto.clear();
  }
  confirmUpload(event: any) {
    if (this.uploadForm.valid) {
      this.confirmationService.confirm({
        target: event.target,
        message: '¿Esta seguro que desea realizar la accion?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          let files = this.fubauto.files;
          for (let file of files) {
            this.linameService.uploadLinameValid(file, this.uploadForm.value['comentarios']).subscribe(response => {
              if (response.success) {
                if (response.data.invalid == 0) {
                  this.messageService.add({ severity: 'success', summary: 'Archivo liname', detail: 'Se verifico correctamente.' });
                  this.displayModalCargarDatos = true;

                } else {
                  this.messageService.add({ severity: 'warn', summary: 'Archivo liname', detail: 'Tiene errores en la información.' });
                  this.datosValidosExcel = response.data;
                  this.uploadConfirmModal = true;
                }
                this.displayFrmUpload = false;

              } else {
                this.messageService.add({ severity: 'warn', summary: 'Archivo liname', detail: response.message });
                this.datosValidosExcel = null;
              }
            },
              error => {
                this.messageService.add({ severity: 'error', summary: 'Archivo liname', detail: 'Error al consumir el servicio.' });
                this.datosValidosExcel = null;
              });
          }
        },
        reject: () => {
          //reject action
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Archivo liname', detail: 'Datos incorrectos.' });
      this.uploadFormValid = true;
    }
  }
  confirmConsolidar(event: any) {
    this.displayModalCargarDatos = false;
    let files = this.fubauto.files;
    for (let file of files) {
      this.linameService.uploadLinameConsolida(file, this.uploadForm.value['comentarios']).subscribe(response => {
        if (response.success) {
          this.messageService.add({ severity: 'success', summary: 'Archivo liname consolidar', detail: 'Se consolido el archivo.' });
          this.dt.reset();
        } else {
          this.messageService.add({ severity: 'warn', summary: 'Archivo liname consolidar', detail: response.message });
        }
      },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Archivo liname consolidar', detail: 'Error al consumir el servicio.' });
          this.datosValidosExcel = null;
        });
    }
  }
}
