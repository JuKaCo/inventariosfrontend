import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { VentaCotizacionItemService } from 'src/app/venta-module/service/venta-cotizacion-item.service';


@Component({
  selector: 'app-form-item-venta',
  templateUrl: './form-item-venta.component.html',
  styleUrls: ['./form-item-venta.component.scss']
})
export class FormItemVentaComponent implements OnInit {
  //generales
  displayHeader = "";
  header: string = "item";
  modulo: string = "Item";
  es: any;
  timeConfirm: number = 250;

  //dialog
  tipo: string = "crear";
  //formulario
  cantidad: number = 0;
  //confirm
  textCrea: string = "¿Esta seguro de adicionar a la cotización?.";
  //emitir datos
  @Output() respformFI = new EventEmitter();
  @Input() id: string = "";
  @Input() kardex: any;
  total: number = 0;
  valid = false;
  constructor(
    private messageService: MessageService,
    private loaderService: LoaderService,
    private generalService: GeneralService,
    private service: VentaCotizacionItemService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

  totalCal(event: any) {
    this.total = event.value * this.kardex.precio_venta;
    this.validCant();
  }
  validCant() {
    if (this.total > 0) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
  confirmarGuardar(event: any): void {
    setTimeout(() => {
      this.confirmationService.confirm({
        target: event.target,
        message: this.textCrea,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action

          this.set();
        },
        reject: () => {
          //reject action
        }
      })
    }, this.timeConfirm);
  }
  set() {
    let data: any;
    data = {
      id_coti_vent: this.id,
      id_producto_inventario: this.kardex,
      tipo:"COTIZACION",
      cantidad: this.cantidad
    };
    this.service.set(data).subscribe(response => {
      if (response.success) {
        this.respformFI.emit({ tipo: this.tipo, success: true, message: response.message });
        this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
        this.total = 0;
        this.cantidad = 0;
      } else {
        this.respformFI.emit({ tipo: this.tipo, success: false, message: response.message });
        this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
      }
    },
      error => {
        this.respformFI.emit({ tipo: this.tipo, success: false, message: error.message });
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
      });
  }
}
