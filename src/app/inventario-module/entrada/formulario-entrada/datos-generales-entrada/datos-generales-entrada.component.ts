import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioEntradaService } from 'src/app/inventario-module/service/inventario-entrada.service';

@Component({
  selector: 'app-datos-generales-entrada',
  templateUrl: './datos-generales-entrada.component.html',
  styleUrls: ['./datos-generales-entrada.component.scss']
})
export class DatosGeneralesEntradaComponent implements OnInit {
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
    this.formulario.addControl('id_regional', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
    this.formulario.addControl('id_almacen', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
    this.formulario.addControl('tipo_entrada', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('id_proveedor', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('id_compra', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('tipo_adquisicion', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('tipo_financiamiento', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('factura_comercial', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('c_31', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('modalidad_contratacion', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('cite_contrato_compra', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('nota', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('comision', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoCompleteMultiple]));
    this.formularioValid = false;
  }

  crear() {
    this.formulario.get('codigo')?.disable();
    this.formulario.get('codigo')?.setValue('Por asignar');
    if (this.privilegio != 'total') {
      let data = (this.param['param_regional'])[0];
      this.formulario.get('id_regional')?.setValue(data);
      this.formulario.get('id_regional')?.disable();
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
    let data: any;
    this.formulario.get('codigo')?.enable();
    if (this.privilegio != 'total') {
      this.formulario.get('id_regional')?.enable();
      data = this.formulario.value;
      this.formulario.get('id_regional')?.disable();
    } else {
      data = this.formulario.value;
    }
    this.formulario.get('codigo')?.disable();
    if (this.formulario.valid) {
      this.service.set(data).subscribe(response => {
        if (response.success) {
          let data = response.data;
          let valores = {
            id: data.id,
            codigo: data.codigo,
            id_regional: data.id_regional,
            id_almacen: data.id_almacen,
            tipo_entrada: data.tipo_entrada,
            id_proveedor: data.id_proveedor,
            id_compra: data.id_compra,
            tipo_adquisicion: data.tipo_adquisicion,
            tipo_financiamiento: data.tipo_financiamiento,
            factura_comercial: data.factura_comercial,
            c_31: data.c_31,
            modalidad_contratacion: data.modalidad_contratacion,
            cite_contrato_compra: data.cite_contrato_compra,
            nota: data.nota,
            comision: data.comision
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
      let data: any;
      this.formulario.get('codigo')?.enable();
      if (this.privilegio != 'total') {
        this.formulario.get('id_regional')?.enable();
        data = this.formulario.value;
        this.formulario.get('id_regional')?.disable();
      } else {
        data = this.formulario.value;
      }
      this.formulario.get('codigo')?.disable();
      let valores = {
        id: data.id,
        codigo: data.codigo,
        id_regional: data.id_regional,
        id_almacen: data.id_almacen,
        tipo_entrada: data.tipo_entrada,
        id_proveedor: data.id_proveedor,
        id_compra: data.id_compra,
        tipo_adquisicion: data.tipo_adquisicion,
        tipo_financiamiento: data.tipo_financiamiento,
        factura_comercial: data.factura_comercial,
        c_31: data.c_31,
        modalidad_contratacion: data.modalidad_contratacion,
        cite_contrato_compra: data.cite_contrato_compra,
        nota: data.nota,
        comision: data.comision
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
    this.formulario.get('codigo')?.disable();
    if (this.privilegio != 'total') {
      this.formulario.get('id_regional')?.disable();
    }
    this.service.getRegistro(id).subscribe(response => {
      if (response.success) {
        let data = response.data;
        let valores = {
          id: data.id,
          codigo: data.codigo,
          id_regional: data.id_regional,
          id_almacen: data.id_almacen,
          tipo_entrada: data.tipo_entrada,
          id_proveedor: data.id_proveedor,
          id_compra: data.id_compra,
          tipo_adquisicion: data.tipo_adquisicion,
          tipo_financiamiento: data.tipo_financiamiento,
          factura_comercial: data.factura_comercial,
          c_31: data.c_31,
          modalidad_contratacion: data.modalidad_contratacion,
          cite_contrato_compra: data.cite_contrato_compra,
          nota: data.nota,
          comision: data.comision
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
    if (tipo == 'param_regional' || tipo == 'param_almacen' || tipo == 'param_proveedor' || tipo == 'param_compra' || tipo == 'param_usuario') {
      if (tipo == 'param_regional') {
        if (this.formulario != undefined) {
          if (this.privilegio == 'total') {
            this.formulario.get('id_almacen')?.setValue('');
            this.formulario.get('id_almacen')?.disable();
          } else {
            this.formulario.get('id_almacen')?.enable();
          }
        }
      }
      if (tipo == 'param_almacen') {
        if (this.privilegio == 'total') {
          filtro = filtro + '&id_regional=' + this.formulario.value.id_regional.id;
        } else {
          this.formulario.get('id_regional')?.enable();
          filtro = filtro + '&id_regional=' + this.formulario.value.id_regional.id;
          this.formulario.get('id_regional')?.disable();
        }
      }
      let tipoURL = tipo.slice(6);
      this.generalService.getParamUrl(tipoURL, filtro).subscribe(response => {
        if (response.success) {
          if (tipo == 'param_regional') {
            if (this.privilegio == 'total') {
              this.param[tipo] = response.data;
            } else {
              this.param[tipo] = response.data.filter((x: { id: any; }) => x.id == this.id_regional)
              //verificar funcionamientos
              this.crear();
            }
          } else {
            this.param[tipo] = response.data;
          }
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
