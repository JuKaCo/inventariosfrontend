import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { UtilService } from 'src/app/general/services/util.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioProductoService } from '../../service/inventario-producto.service';
@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent implements OnInit {
  //generales
  displayHeader = "";
  header: string = "producto";
  modulo: string = "Producto";
  //dialog
  tipo: string = "";
  displayFrm: boolean = false;
  displayDialog: boolean = false;
  //formulario
  formulario!: FormGroup;
  formularioValid: boolean = false;
  param: any = [];
  //confirm
  textCrea: string = "¿Esta seguro de guardar los datos?. Verifique antes de confirmar.";
  textEditar: string = "¿Esta seguro de modificar los datos?.";
  textEliminar: string = "¿Esta seguro de eliminar el registro?.";
  //tiempo animacion pop out confirm
  timeConfirm = 250;
  //ver
  datos!: any;
  //emitir datos
  @Output() respform = new EventEmitter();
  //async
  ver$!: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loaderService: LoaderService,
    private generalService: GeneralService,
    private service: InventarioProductoService,
  ) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formulario = this.formBuilder.group({});
    this.formulario.addControl('id', new FormControl({ value: '0', disabled: false }, []));
    this.formulario.addControl('codigo', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('nombre_comercial', new FormControl({ value: '', disabled: false }, [ValidacionService.required]));
    this.formulario.addControl('codigo_liname', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('codigo_linadime', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('referencia', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('medicamento', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('form_farm', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('concen', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('atq', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('precio_ref', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('aclara_parti', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('dispositivo', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('especificacion_tec', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('presentacion', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('nivel_uso_i', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('nivel_uso_ii', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('nivel_uso_iii', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('tipo_controlado', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('categoria_prod', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));

    this.formularioValid = false;
  }

  resetFormValidUpload() {
    this.formulario.reset();
    this.formularioValid = false;
  }

  getFilter(event: any, tipo: string) {
    let filtro = event.query
    if (tipo == 'param_liname') {
      let valor = this.formulario.get('codigo_liname')?.value;
      if (typeof valor !== "object") {
        this.limpiarLiname();
      }
      this.service.getLiname(filtro).subscribe(response => {
        if (response.success) {
          this.param[tipo] = response.data;
        } else {
          this.param[tipo] = [];
          this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos no encontrados.' });
        }
      },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
        });
    } else {
      if (tipo == 'param_linadime') {
        let valor = this.formulario.get('codigo_linadime')?.value;
        if (typeof valor !== "object") {
          this.limpiarLinadime();
        }
        this.service.getLinadime(filtro).subscribe(response => {
          if (response.success) {
            this.param[tipo] = response.data;
          } else {
            this.param[tipo] = [];
            this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos no encontrados.' });
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
            this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos no encontrados.' });
          }
        },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
          });
      }
    }
  }
  limpiarLiname() {
    this.formulario.get('medicamento')?.setValue('');
    this.formulario.get('form_farm')?.setValue('');
    this.formulario.get('concen')?.setValue('');
    this.formulario.get('atq')?.setValue('');
    this.formulario.get('precio_ref')?.setValue('');
    this.formulario.get('aclara_parti')?.setValue('');
  }
  limpiarLinadime() {
    this.formulario.get('dispositivo')?.setValue('');
    this.formulario.get('especificacion_tec')?.setValue('');
    this.formulario.get('presentacion')?.setValue('');
    this.formulario.get('nivel_uso_i')?.setValue('');
    this.formulario.get('nivel_uso_ii')?.setValue('');
    this.formulario.get('nivel_uso_iii')?.setValue('');
  }

  confirmarGuardar(event: any): void {
    let texto = this.textCrea;
    let valor1 = this.formulario.get('codigo_liname')?.value;
    if (typeof valor1 !== "object" || valor1 == null) {
      this.limpiarLiname();
    }
    let valor2 = this.formulario.get('codigo_linadime')?.value;
    if (typeof valor2 !== "object" || valor2 == null) {
      this.limpiarLinadime();
    }
    if (this.formulario.valid) {
      this.confirmationService.confirm({
        target: event.target,
        message: texto,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.guardarDatos();
        },
        reject: () => {
          //reject action
        }
      });

    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formularioValid = true;
    }
  }

  guardarDatos(): void {
    let data = this.formulario.value;

    data = UtilService.modComboNull(data, ['codigo_liname', 'codigo_linadime', 'tipo_controlado', 'categoria_prod']);
    data = UtilService.modNullEspacio(data);

    this.service.set(data).subscribe(response => {
      if (response.success) {
        this.respform.emit({ tipo: this.tipo, success: true, message: response.message });
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
        this.displayFrm = false;

      } else {
        this.respform.emit({ tipo: this.tipo, success: false, message: response.message });
        this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
      }
    },
      error => {
        this.respform.emit({ tipo: this.tipo, success: false, message: error.message });
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
        this.displayFrm = false;

      });
  }

  confirmarEditar(event: any): void {
    let texto = this.textEditar;
    let valor1 = this.formulario.get('codigo_liname')?.value;
    if (typeof valor1 !== "object" || valor1 == null) {
      this.limpiarLiname();
    }
    let valor2 = this.formulario.get('codigo_linadime')?.value;
    if (typeof valor2 !== "object" || valor2 == null) {
      this.limpiarLinadime();
    }
    if (this.formulario.valid) {
      this.confirmationService.confirm({
        target: event.target,
        message: texto,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.modificarDatos();
        },
        reject: () => {
          //reject action
        }
      });

    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formularioValid = true;
    }
  }

  modificarDatos(): void {
    //this.formulario.get('codigo')?.enable();
    let data = this.formulario.value;
    //this.formulario.get('codigo')?.disable();

    let valores = {
  
      codigo: data.codigo,
      nombre_comercial: data.nombre_comercial,
      codigo_liname: data.codigo_liname,
      codigo_linadime:data.codigo_linadime,
      //reg_san: data.reg_san,
      referencia: data.referencia,
      medicamento: data.medicamento,
      concen: data.concen,
      atq: data.atq,
      precio_ref: data.precio_ref,
      aclara_parti: data.aclara_parti,
      form_farm:data.form_farm,
      dispositivo: data.dispositivo,
      especificacion_tec: data.especificacion_tec,
      presentacion: data.presentacion,
      nivel_uso_i: data.nivel_uso_i,
      nivel_uso_ii: data.nivel_uso_ii,
      nivel_uso_iii: data.nivel_uso_ii
    };

    data = UtilService.modComboNull(data, ['codigo_liname', 'codigo_linadime', 'tipo_controlado', 'categoria_prod']);
    data = UtilService.modNullEspacio(data);

    this.service.setEdita(valores, data.id).subscribe(response => {
      if (response.success) {
        this.respform.emit({ tipo: this.tipo, success: true, message: response.message });
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
        this.displayFrm = false;

      } else {
        this.respform.emit({ tipo: this.tipo, success: false, message: response.message });
        this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
      }
    },
      error => {
        this.respform.emit({ tipo: this.tipo, success: false, message: error.message });
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
        this.displayFrm = false;

      });
  }

  crear(): void {
    this.tipo = 'crear';
    this.resetFormValidUpload();
    this.displayFrm = true;
    this.displayHeader = 'Formulario ' + this.header;
  }

  editar(id: string): void {
    //this.tipo = 'editar';
    this.resetFormValidUpload();
    this.displayHeader = 'Formulario ' + this.header;
    //this.formulario.get('codigo')?.disable();
    this.service.getRegistro(id).subscribe(response => {
      if (response.success) {
        let data = response.data;
        let valores = {

          id: data.id,
          codigo: data.codigo,
          nombre_comercial: data.nombre_comercial,
          codigo_liname: data.codigo_liname,
          codigo_linadime:data.codigo_linadime,
          //reg_san: data.reg_san,
          referencia: data.referencia,
          medicamento: data.medicamento,
          concen: data.concen,
          atq: data.atq,
          precio_ref: data.precio_ref,
          aclara_parti: data.aclara_parti,
          form_farm:data.form_farm,
          dispositivo: data.dispositivo,
          especificacion_tec: data.especificacion_tec,
          presentacion: data.presentacion,
          nivel_uso_i: data.nivel_uso_i,
          nivel_uso_ii: data.nivel_uso_ii,
          nivel_uso_iii: data.nivel_uso_ii
        }
        
        this.formulario.setValue(valores);
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
        this.displayFrm = true;
        this.tipo = 'editar';

      } else {
        this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
        this.displayFrm = false;
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
        this.displayFrm = false;
      });
  }
  eliminar(event: any, id: string) {
    this.confirmationService.close();
    this.tipo = "eliminar";
    setTimeout(() => {
      this.confirmationService.confirm({
        target: event.target,
        message: this.textEliminar,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.service.setElimina(id).subscribe(response => {
            if (response.success) {
              this.respform.emit({ tipo: this.tipo, success: true, message: response.message });
              this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se consolido el archivo.' });
            } else {
              this.respform.emit({ tipo: this.tipo, success: false, message: response.message });
              this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
            }
          },
            error => {
              this.respform.emit({ tipo: this.tipo, success: false, message: error.message });
              this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
            });
        },
        reject: () => {
          //reject action
        }
      })
    }, this.timeConfirm);
  }
  ver(id: string): void {
    this.datos = null;
    this.displayHeader = 'Datos ' + this.header;
    this.resetFormValidUpload();
    //this.formulario.get('codigo')?.disable();
    this.ver$=this.service.getRegistro(id);
    this.ver$.subscribe(response => {
      if (response.success) {
        this.datos = response.data;
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
        this.displayDialog = true;
        this.tipo = 'ver';
      } else {
        this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
        this.displayDialog = false;
      }
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
        this.displayDialog = false;
      });
  }
  selectLiname(event: any) {
    this.formulario.get('medicamento')?.setValue(event.medicamento);
    this.formulario.get('form_farm')?.setValue(event.for_farma);
    this.formulario.get('concen')?.setValue(event.concen);
    this.formulario.get('atq')?.setValue(event.class_atq);
    this.formulario.get('precio_ref')?.setValue(event.pre_ref);
    this.formulario.get('aclara_parti')?.setValue(event.aclara_parti);
    this.limpiarLinadime();
  }
  selectLinadime(event: any) {
    this.formulario.get('dispositivo')?.setValue(event.dispositivo);
    this.formulario.get('especificacion_tec')?.setValue(event.esp_tec);
    this.formulario.get('presentacion')?.setValue(event.presen);
    this.formulario.get('nivel_uso_i')?.setValue(event.niv_uso_I);
    this.formulario.get('nivel_uso_ii')?.setValue(event.niv_uso_II);
    this.formulario.get('nivel_uso_iii')?.setValue(event.niv_uso_III);
    this.limpiarLiname();
  }
  cerrarForm() {
    this.displayFrm = false;
    this.respform.emit({ tipo: 'cerrar', success: true });

  }
}

