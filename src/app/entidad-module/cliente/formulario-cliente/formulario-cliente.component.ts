import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { UtilService } from 'src/app/general/services/util.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { EntidadClienteService } from '../../service/entidad-cliente.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {
  //generales
  displayHeader = "";
  header: string = "cliente";
  modulo: string = "Cliente";
  id_regional: any;
  privilegio: any;
  //dialog
  tipo: string = "";
  displayFrm: boolean = false;
  //formulario
  formulario!: FormGroup;
  formularioValid: boolean = false;
  param: any = [];
  //confirm
  textCrea: string = "¿Esta seguro de guardar los datos?.";
  textEditar: string = "¿Esta seguro de modificar los datos?.";
  textEliminar: string = "¿Esta seguro de eliminar el registro?.";
  //tiempo animacion pop out confirm
  timeConfirm = 250;
  //ver
  datos!: any;
  //emitir datos
  @Output() respform = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loaderService: LoaderService,
    private generalService: GeneralService,
    private service: EntidadClienteService,
  ) {
    this.id_regional = sessionStorage.getItem('regional');
    this.privilegio = sessionStorage.getItem('privilegio');
  }

  ngOnInit(): void {
    this.getFilter({ query: '' }, 'param_regional');
    this.initForm();
  }

  initForm(): void {
    this.formulario = this.formBuilder.group({});
    this.formulario.addControl('id', new FormControl({ value: '0', disabled: false }, []));
    this.formulario.addControl('nombre', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('correo', new FormControl({ value: '', disabled: false }, [ValidacionService.emailValidator]));
    this.formulario.addControl('telefono', new FormControl({ value: '', disabled: false }, [ValidacionService.numberValidator]));
    this.formulario.addControl('nit', new FormControl({ value: '', disabled: false }, [ValidacionService.numberValidator, Validators.required]));
    this.formulario.addControl('dependencia', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('nivel', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('departamento', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('provincia', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('municipio', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('ciudad', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('direccion', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('subsector', new FormControl({ value: '', disabled: false }, []));
    this.formulario.addControl('tipo', new FormControl({ value: '', disabled: false }, []));

    this.formulario.addControl('id_regional', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));

    this.formularioValid = false;
  }

  resetFormValidUpload() {
    this.formulario.reset();
    this.formularioValid = false;
  }

  getFilter(event: any, tipo: string) {
    let filtro = event.query
    if (tipo == 'param_regional') {
      this.generalService.getParamUrl('regional', filtro).subscribe(response => {
        if (response.success) {
          if (this.privilegio != 'total') {
            this.param[tipo] = response.data.filter((x: { id: any; }) => x.id == this.id_regional)
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
    } else
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

  confirmarGuardar(event: any): void {
    let texto = this.textCrea;
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
    let data:any;
    if (this.privilegio != 'total') {
      this.formulario.get('id_regional')?.enable();
      data = this.formulario.value;
      this.formulario.get('id_regional')?.disable();
    } else {
      data = this.formulario.value;
    }

    data = UtilService.modComboNull(data, ['dependencia', 'nivel', 'departamento', 'provincia', 'municipio', 'subsector', 'tipo']);
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
    let data:any; 
    if (this.privilegio != 'total') {
      this.formulario.get('id_regional')?.enable();
      data = this.formulario.value;
      this.formulario.get('id_regional')?.disable();
    } else {
      data = this.formulario.value;
    }

    let valores = {
      nombre: data.nombre,
      telefono: data.telefono,
      correo: data.correo,
      nit: data.nit,
      dependencia: data.dependencia,
      nivel: data.nivel,
      departamento: data.departamento,
      provincia: data.provincia,
      municipio: data.municipio,
      ciudad: data.ciudad,
      direccion: data.direccion,
      subsector: data.subsector,
      tipo: data.tipo,
      id_regional: data.id_regional
    };

    data = UtilService.modComboNull(data, ['dependencia', 'nivel', 'departamento', 'provincia', 'municipio', 'subsector', 'tipo']);
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
    //this.formulario.get('codigo')?.setValue('Por asignar');
    // this.formulario.get('codigo')?.enable();
    if (this.privilegio != 'total') {
      console.log((this.param['param_regional'])[0]);
      let data = (this.param['param_regional'])[0];
      this.formulario.get('id_regional')?.setValue(data);
      this.formulario.get('id_regional')?.disable();
    }

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
          nombre: data.nombre,
          telefono: data.telefono,
          correo: data.correo,
          nit: data.nit,
          dependencia: data.dependencia,
          nivel: data.nivel,
          departamento: data.departamento,
          provincia: data.provincia,
          municipio: data.municipio,
          ciudad: data.ciudad,
          direccion: data.direccion,
          subsector: data.subsector,
          tipo: data.tipo,
          id_regional: data.id_regional
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
    this.service.getRegistro(id).subscribe(response => {
      if (response.success) {
        this.datos = response.data;
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
        this.displayFrm = true;
        this.tipo = 'ver';
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
}

