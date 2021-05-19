import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioEntradaItemService } from 'src/app/inventario-module/service/inventario-entrada-item.service';

@Component({
  selector: 'app-form-item-cotizacion',
  templateUrl: './form-item-cotizacion.component.html',
  styleUrls: ['./form-item-cotizacion.component.scss']
})
export class FormItemCotizacionComponent implements OnInit {
//generales
displayHeader = "";
header: string = "item";
modulo: string = "Item";
es: any;

//dialog
tipo: string = "";
displayFrm: boolean = false;
//formulario
formulario!: FormGroup;
formularioValid: boolean = false;
param: any = {};
nom_comer: string = "Seleccione un producto";
calculo: any = {};
//confirm
textCrea: string = "¿Esta seguro de guardar los datos?.";
textEditar: string = "¿Esta seguro de modificar los datos?.";
textEliminar: string = "¿Esta seguro de eliminar el registro?.";
//tiempo animacion pop out confirm
timeConfirm = 250;
//ver
datos!: any;
//emitir datos
@Output() respformI = new EventEmitter();
id: string = "";
//observable
ver$!:Observable<any>;   
constructor(
  private formBuilder: FormBuilder,
  private messageService: MessageService,
  private confirmationService: ConfirmationService,
  private loaderService: LoaderService,
  private generalService: GeneralService,
  private service: InventarioEntradaItemService,
) { }

ngOnInit(): void {
  this.initForm();
  this.formulario.get('cantidad')!.valueChanges.subscribe(val => {
    this.calc({ value: val }, 'cantidad');
  });
  this.formulario.get('precio_unidad_fob')!.valueChanges.subscribe(val => {
    this.calc({ value: val }, 'precio_unidad_fob');
  });

}
initForm(): void {
  this.formulario = this.formBuilder.group({});
  this.formulario.addControl('id', new FormControl({ value: '0', disabled: false }, []));
  this.formulario.addControl('id_producto', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
  this.formulario.addControl('id_coti_vent', new FormControl({ value: '', disabled: false }, []));
  this.formulario.addControl('tipo', new FormControl({ value: '', disabled: false }, []));
  this.formulario.addControl('cantidad', new FormControl({ value: '', disabled: false }, [ValidacionService.numeroPositivo, Validators.required]));
  this.formulario.addControl('precio_venta', new FormControl({ value: '', disabled: false }, [ValidacionService.numeroPositivo, Validators.required]));
  this.formulario.addControl('precio_total', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));

  this.formularioValid = false;
  //this.formulario.get("cantidad")!.setValue("", { emitEvent: false });

}

resetFormValidUpload() {
  this.formulario.reset();
  this.formularioValid = false;
}

getFilter(event: any, tipo: string) {
  let filtro = event.query
  if (tipo == 'producto') {
    this.nom_comer = "Seleccione un producto";
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

  this.formulario.get('id_entrada_salida')?.setValue(this.id);
  let data = this.formulario.value;
  data['tipo_in_out'] = 'IN';

  this.service.set(data).subscribe(response => {
    if (response.success) {
      this.respformI.emit({ tipo: this.tipo, success: true, message: response.message });
      this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
      this.displayFrm = false;

    } else {
      this.respformI.emit({ tipo: this.tipo, success: false, message: response.message });
      this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
    }
  },
    error => {
      this.respformI.emit({ tipo: this.tipo, success: false, message: error.message });
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

  this.formulario.get('id_entrada_salida')?.setValue(this.id);
  let data = this.formulario.value;

  this.service.setModifica(data.id,data).subscribe(response => {
    if (response.success) {
      this.respformI.emit({ tipo: this.tipo, success: true, message: response.message });
      this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
      this.displayFrm = false;

    } else {
      this.respformI.emit({ tipo: this.tipo, success: false, message: response.message });
      this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
    }
  },
    error => {
      this.respformI.emit({ tipo: this.tipo, success: false, message: error.message });
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
      this.displayFrm = false;

    });
}

crear(): void {
  this.tipo = 'crear';
  this.resetFormValidUpload();
  this.displayFrm = true;
  this.displayHeader = 'Formulario ' + this.header;
  this.formulario.get('cantidad')?.setValue('1');
  this.formulario.get('precio_factura')?.setValue('0');
  this.formulario.get('precio_unidad_fob')?.setValue('0');
}

editar(id: string): void {
  this.tipo = 'editar';
  this.resetFormValidUpload();
  this.displayHeader = 'Formulario ' + this.header;
  this.formulario.get('codigo')?.disable();
  this.service.getRegistro(id).subscribe(response => {
    if (response.success) {
      let data = response.data;
      let valores = {

        id: data.id,
        id_producto: data.id_producto,
        registro_sanitario: data.registro_sanitario,
        lote: data.lote,
        fecha_exp: data.fecha_exp,
        cantidad: data.cantidad,
        precio_factura: data.precio_factura,
        precio_unidad_fob: data.precio_unidad_fob,
        factor: data.factor,
        id_entrada_salida: data.id_entrada_salida,
        //tipo_in_out: data.tipo_in_out
      };
      setTimeout(() => {
        this.calculo = {
          total: data.precio_total,
          costo_almacen: data.costo_almacen,
          costo_neto: data.costo_neto,
          precio_venta: data.precio_venta
        };
      }, 600);
      
      this.formulario.setValue(valores);
      this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
      this.displayFrm = true;

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
            this.respformI.emit({ tipo: this.tipo, success: true, message: response.message });
            this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se consolido el archivo.' });
          } else {
            this.respformI.emit({ tipo: this.tipo, success: false, message: response.message });
            this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
          }
        },
          error => {
            this.respformI.emit({ tipo: this.tipo, success: false, message: error.message });
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
  this.tipo = 'ver';
  this.displayHeader = 'Datos ' + this.header;
  this.resetFormValidUpload();
  //this.formulario.get('codigo')?.disable();
  this.ver$=this.service.getRegistro(id);
  this.ver$.subscribe(response => {
    if (response.success) {
      this.datos = response.data;
      this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
      this.displayFrm = true;

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
selectProducto(event: any) {
  this.nom_comer = event.nombre_comercial;
}
calc(event: any, tipo: any) {
  //this.formularioValid=true;
  let cantidad = this.formulario.get('cantidad')?.value;
  let precio_unidad_fob = this.formulario.get('precio_unidad_fob')?.value;
  let factor = this.formulario.get('factor')?.value;

  if (tipo == 'cantidad') {
    cantidad = event.value;
  }

  if (tipo == 'precio_unidad_fob') {
    precio_unidad_fob = event.value;
  }
  //console.log(cantidad, precio_unidad_fob, factor);
  if (cantidad != null && precio_unidad_fob != null && factor != undefined) {
    if (Number(cantidad) > 0 && Number(precio_unidad_fob) >= 0 && typeof factor === "object") {
      //this.messageService.add({ severity: 'info', summary: this.modulo, detail: 'Se esta realizando los calculos' });
      //this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se esta realizo los calculos' });
      let data = this.formulario.value;
      this.service.getCalItemCalcula({
        "cantidad": cantidad,
        "precio_unidad_fob": precio_unidad_fob,
        "factor": data.factor.codigo
      }
      ).subscribe(response => {
        if (response.success) {
          this.calculo = response.data;
        } else {
          this.calculo = {}
        }
      },
        error => {
          this.calculo = {}
          this.messageService.add({ severity: 'error', summary: 'Calculo', detail: 'Datos incorrectos.' });
        });

    } else {
      if (Number(cantidad) <= 0) {
        this.formulario.get('cantidad')?.invalid;
        //this.messageService.add({ severity: 'warn', summary: 'Calculo', detail: 'Cantidad menor a 0' });
      }
      this.calculo = {};
      //this.messageService.add({ severity: 'warn', summary: 'Calculo', detail: 'Datos incorrectos' });
    }
  } else {
    this.calculo = {};
    //this.messageService.add({ severity: 'warn', summary: 'Calculo', detail: 'Datos incorrectos' });
  }

}
}
