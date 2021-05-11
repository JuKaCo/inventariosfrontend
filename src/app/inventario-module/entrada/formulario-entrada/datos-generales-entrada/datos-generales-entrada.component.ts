import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioProgramaService } from 'src/app/inventario-module/service/inventario-programa.service';

@Component({
  selector: 'app-datos-generales-entrada',
  templateUrl: './datos-generales-entrada.component.html',
  styleUrls: ['./datos-generales-entrada.component.scss']
})
export class DatosGeneralesEntradaComponent implements OnInit {
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
    private service: InventarioProgramaService,
  ) { }

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
    this.crear();
  }

  crear() {
    this.formulario.get('id_almacen')?.disable();
  }

  guardar(tipo: any) {
    this.respform.emit({ tipo: 'guardar-datos-generales', success: true });
  }

  getFilter(event: any, tipo: string) {
    let filtro = event.query
    if (tipo == 'regional' || tipo == 'almacen' || tipo == 'proveedor' || tipo == 'compra' || tipo == 'usuario') {
      if (tipo == 'regional') {
        this.formulario.get('id_almacen')?.setValue('');
        this.formulario.get('id_almacen')?.disable();
      }
      if (tipo == 'almacen') {
        filtro = filtro + '&id_regional=' + this.formulario.value.id_regional.id;
      }
      this.generalService.getParamUrl(tipo, filtro).subscribe(response => {
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
