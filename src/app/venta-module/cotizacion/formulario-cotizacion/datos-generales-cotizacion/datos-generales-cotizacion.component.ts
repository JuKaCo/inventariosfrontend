import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioEntradaService } from 'src/app/inventario-module/service/inventario-entrada.service';


@Component({
  selector: 'app-datos-generales-cotizacion',
  templateUrl: './datos-generales-cotizacion.component.html',
  styleUrls: ['./datos-generales-cotizacion.component.scss']
})
export class DatosGeneralesCotizacionComponent implements OnInit {
  //datos generales
  modulo: string = 'Datos generales';
  id_regional: any;
  privilegio: any;
  //formulario
  formulario!: FormGroup;
  formularioValid: boolean = false;
  param: any = {};
  tipo: string = 'add';

  //emitir datos
  @Output() respform = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loaderService: LoaderService,
    private generalService: GeneralService,
    private service: InventarioEntradaService,
  ) {
    this.id_regional = sessionStorage.getItem('regional');
    this.privilegio = sessionStorage.getItem('privilegio');
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formulario = this.formBuilder.group({});
    this.formulario.addControl('id', new FormControl({ value: '0', disabled: false }, []));
    this.formulario.addControl('codigo', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('id_cliente', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
    this.formulario.addControl('id_regional', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
    this.formulario.addControl('id_almacen', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
    this.formulario.addControl('dias_validez', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('comentarios', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formularioValid = false;
    this.crear();
  }

  crear() {
    this.formulario.get('codigo')?.disable();
    this.formulario.get('codigo')?.setValue('Por asignar');
    this.formulario.get('dias_validez')?.setValue('5');
    if (this.privilegio != 'total') {
      this.formulario.get('id_regional')?.disable();
    } else {
      this.formulario.get('id_cliente')?.disable();
      this.formulario.get('id_almacen')?.disable();
    }

  }
  resetFormValidUpload() {
    this.formulario.reset();
    this.formularioValid = false;
  }
  guardar(tipo: any) {
    if (this.formulario.value.id == 0) {
      this.set();
    } else {
      this.mod();
    }

  }
  set() {
    let data = this.formulario.value;
    if (this.formulario.valid) {
      this.service.set(data).subscribe(response => {
        if (response.success) {
          let data = response.data;
          let valores = {
            id: data.id,
            codigo: data.codigo,
            id_cliente: data.id_cliente,
            id_regional: data.id_regional,
            id_almacen: data.id_almacen,
            comentarios: data.id_proveedor,
          };
          this.formulario.setValue(valores);
          this.respform.emit({ tipo: 'guardar-datos-generales', success: true, data: data });
          this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.success.message });
        } else {
          this.messageService.add({ severity: 'info', summary: this.modulo, detail: response.success.message });
        }
      },
        error => {

          this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
        });
    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formularioValid = true;
    }

  }
  mod() {
    if (this.formulario.valid) {
      let data = this.formulario.value;
      let valores = {
        id: data.id,
        codigo: data.codigo,
        id_cliente: data.id_cliente,
        id_regional: data.id_regional,
        id_almacen: data.id_almacen,
        comentarios: data.id_proveedor,
      }
      this.service.setModifica(data.id, valores).subscribe(response => {
        if (response.success) {
          this.respform.emit({ tipo: 'guardar-datos-generales', success: true, data: data });
          this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });

        } else {
          this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
        }
      },
        error => {
          this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });

        });
    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formularioValid = true;
    }
  }
  editar(id: any) {
    this.resetFormValidUpload();
    this.service.getRegistro(id).subscribe(response => {
      if (response.success) {
        let data = response.data;
        let valores = {
          id: data.id,
          codigo: data.codigo,
          id_cliente: data.id_cliente,
          id_regional: data.id_regional,
          id_almacen: data.id_almacen,
          comentarios: data.id_proveedor,
        };
        this.formulario.setValue(valores);
        this.loaderService.hide();
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
      } else {
        this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
      });
  }

  getFilter(event: any, tipo: string) {
    let filtro = event.query
    if (tipo == 'param_regional' || tipo == 'param_almacen' || tipo == 'param_proveedor' || tipo == 'param_compra' || tipo == 'param_usuario' || tipo == 'param_cliente') {
      if (tipo == 'param_regional') {
        this.formulario.get('id_almacen')?.setValue('');
        this.formulario.get('id_almacen')?.disable();
      }
      if (tipo == 'param_almacen' || tipo == 'param_cliente') {
        filtro = filtro + '&id_regional=' + this.formulario.value.id_regional.id;
      }
      let tipoURL = tipo.slice(6);
      this.generalService.getParamUrl(tipoURL, filtro).subscribe(response => {
        if (response.success) {
          this.param[tipo] = response.data;
        } else {
          this.param[tipo] = [];
        }
      },
        error => {

          this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
        });
    } else {
      this.generalService.getParam(tipo, filtro).subscribe(response => {
        if (response.success) {
          this.param[tipo] = response.data;
        } else {
          this.param[tipo] = [];
        }
      },
        error => {

          this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
        });
    }
  }
  selectRegional(event: any) {
    this.formulario.get('id_almacen')?.enable();
  }
}
