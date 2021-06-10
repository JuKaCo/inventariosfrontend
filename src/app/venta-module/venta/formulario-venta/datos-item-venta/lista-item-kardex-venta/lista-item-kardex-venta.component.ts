import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoaderService } from 'src/app/general/services/loader.service';
import { VentaCotizacionItemService } from 'src/app/venta-module/service/venta-cotizacion-item.service';


@Component({
  selector: 'app-lista-item-kardex-venta',
  templateUrl: './lista-item-kardex-venta.component.html',
  styleUrls: ['./lista-item-kardex-venta.component.scss']
})
export class ListaItemKardexVentaComponent implements OnInit {
 //datos generales
 displayHeader: string = "Modificar item";
 textModifica: string = "Esta seguro de modificar la cantidad";
 textEliminar: string = "Esta seguro de elimnar el item";

 displayFrm: boolean = false;
 cantidad: number = 0;
 total: number = 0;
 valid = false;
 contiza: any;
 timeConfirm: number = 250;


 @Input() id_almacen: string = "";
 @Input() id: string = "";
 @Output() respformI = new EventEmitter();

 loading: boolean = false;
 listaTabla: any = [];
 totalRecords: number = 0;
 modulo: string = "Kardex";
 buscar: string = "";
 rows: any = { code: '10', value: '10' };
 indice: number = 0;

 @ViewChild('dv') dv!: DataView;
 constructor(
   private service: VentaCotizacionItemService,
   private messageService: MessageService,
   private confirmationService: ConfirmationService,
 ) { }
 ngOnInit(): void {
 }

 ngOnChanges(changes: SimpleChanges) {
   this.loadDataList();
 }
 loadDataList() {
   this.buscar = "";
   this.loadDataKardex({
     first: 0,
     rows: 10
   }, '');
 }

 loadDataKardex(event: any, bus: any): any {
   let indice;
   let limite = this.rows.value;
   let filtro = bus;

   if (event == 'texto' || event == 'rows') {
     indice = 0;
     indice = 0;
   } else {
     indice = event.first;
   }
   this.indice = indice;

   this.loading = true;
   this.listaTabla = [];
   let dataTable = { 'indice': indice, 'limite': limite, 'filtro': filtro };
   if (this.id == '') {
     return null;
   }
   this.service.getLista(dataTable, this.id).subscribe(response => {
     if (response.success) {
       this.listaTabla = response.data.resultados;
       this.totalRecords = response.data.total;
       //this.totalRecords = 100;
       this.loading = false;
     }
   },
     error => {
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
     });
 }

 edit(pruduct: any) {
   this.displayFrm = true;
   this.cantidad = pruduct.cantidad;
   this.contiza = pruduct;
   this.totalCal({ value: this.cantidad });
 }
 totalCal(event: any) {
   this.total = event.value * this.contiza.precio_venta;
   this.validCant();
 }
 validCant() {
   if (this.total > 0) {
     this.valid = true;
   } else {
     this.valid = false;
   }
 }
 confirmarEdirar(event: any): void {
   this.confirmationService.confirm({
     target: event.target,
     message: this.textModifica,
     icon: 'pi pi-exclamation-triangle',
     accept: () => {
       this.mod();
     },
     reject: () => {
       //reject action
     }
   });
 }
 mod() {
   let data: any;
   data = {
     cantidad: this.cantidad
   };
   this.service.setModifica(this.contiza.id, data).subscribe(response => {
     if (response.success) {
       this.displayFrm = false;
       this.respformI.emit({ tipo: 'editar', success: true });
       this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
     } else {
       //this.respform.emit({ tipo: this.tipo, success: false, message: response.message });
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
     }
   },
     error => {
       //this.respform.emit({ tipo: this.tipo, success: false, message: error.message });
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
     });
 }
 eliminar(event: any, id: string) {
   this.confirmationService.close();
   setTimeout(() => {
     this.confirmationService.confirm({
       target: event.target,
       message: this.textEliminar,
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
         //confirm action
         this.service.setElimina(id).subscribe(response => {
           if (response.success) {
             this.respformI.emit({ tipo: 'eliminar', success: true, message: response.message });
             this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se consolido el archivo.' });
           } else {
             this.respformI.emit({ tipo: 'eliminar', success: false, message: response.message });
             this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
           }
         },
           error => {
             this.respformI.emit({ tipo: 'elimnar', success: false, message: error.message });
             this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
           });
       },
       reject: () => {
         //reject action
       }
     })
   }, this.timeConfirm);
 }
}
