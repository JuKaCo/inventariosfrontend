import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { UtilService } from 'src/app/general/services/util.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { MenuItem } from 'primeng/api';
import { DatosGeneralesCotizacionComponent } from './datos-generales-cotizacion/datos-generales-cotizacion.component';
import { DatosItemCotizacionComponent } from './datos-item-cotizacion/datos-item-cotizacion.component';
import { DocumentosCotizacionComponent } from './documentos-cotizacion/documentos-cotizacion.component';
import { TerminarCotizacionComponent } from './terminar-cotizacion/terminar-cotizacion.component';
import { VentaCotizacionService } from '../../service/venta-cotizacion.service';
@Component({
  selector: 'app-formulario-cotizacion',
  templateUrl: './formulario-cotizacion.component.html',
  styleUrls: ['./formulario-cotizacion.component.scss']
})
export class FormularioCotizacionComponent implements OnInit {
 //generales
 displayHeader = "";
 header: string = "cotización";
 modulo: string = "Cotizacion";
 items!: MenuItem[];
 //steap
 activeIndex: number = 0;
 txtAnt: string = 'Anterior';
 txtSig: string = 'Siguiente';
 maxIndex: number = 0;
 //ver
 displayFrm: boolean = false;

 //confirm
 textTermina: string = "¿Esta seguro de terminar la cotización?.";
 //tiempo animacion pop out confirm
 timeConfirm = 250;

 //emitir datos
 @Output() respform = new EventEmitter();
 //vistas
 @ViewChild('next1') next1!: DatosGeneralesCotizacionComponent;
 @ViewChild('next2') next2!: DatosItemCotizacionComponent;
 @ViewChild('next3') next3!: DocumentosCotizacionComponent;
 @ViewChild('next4') next4!: TerminarCotizacionComponent;

 //id formulario
 id: string = "";

 constructor(
   private messageService: MessageService,
   private confirmationService: ConfirmationService,
   private loaderService: LoaderService,
   private generalService: GeneralService,
   private service: VentaCotizacionService,
   private cdr: ChangeDetectorRef
 ) {

 }

 ngOnInit(): void {
   this.inciarStep();
 }
 inciarStep() {
   this.items = [
     {
       label: 'Datos generales'
     },
     {
       label: 'Datos items',
     },
     {
       label: 'Documentos',
     },
     {
       label: 'Terminar',
     }
   ];
   this.maxIndex = this.items.length;
 }

 siguiente(): void {
   this.siguienteAccion(this.activeIndex);
 }
 calcSigueinte() {
   if (this.activeIndex < this.maxIndex - 1) {
     this.activeIndex++;
   } else {
     this.activeIndex = this.maxIndex - 1;
     this.termina();
   }
 }
 siguienteAccion(index: any) {
   if (index == 0) {
     this.next1.guardar('SIG');
   }
   if (index == 1) {
     this.next2.guardar('SIG');
   }
   if (index == 2) {
     this.next3.guardar('SIG');
   }
 }

 anterior(): void {
   if (this.activeIndex > 0) {
     this.activeIndex--;
     if (this.activeIndex == 0) {
       this.editar(this.id);
     }
     if (this.activeIndex == 1) {
       this.cdr.detectChanges();
       this.next2.id = this.id;
     }
   } else {
     this.activeIndex = 0;
     this.incia();
   }
 }

 termina() {

 }

 incia() {

 }

 crear(): void {
   this.id = "";
   this.activeIndex = 0;
   this.displayFrm = true;
 }

 editar(id: string): void {
   this.id = "";
   this.activeIndex = 0;
   this.displayFrm = true;
   this.loaderService.show();
   this.cdr.detectChanges();
   this.next1.editar(id)
 }

 eliminar(event: any, id: string) {
 }

 ver(id: string): void {
   this.displayFrm = true;
 }

 cerrarForm() {
   this.displayFrm = false;
   this.respform.emit({ tipo: 'cerrar', success: true });

 }

 respformStep(event: any) {
   if (event.tipo == 'guardar-datos-generales') {
     if (event.success) {
       this.id = event.data.id;

       this.calcSigueinte();

       this.loaderService.show();
       this.cdr.detectChanges();
       this.next2.id = this.id;
       this.next2.cargarTabla(this.id);

     }
   }
   if (event.tipo == 'guardar-datos-item-entrada') {
     if (event.success) {
       this.calcSigueinte();

       this.cdr.detectChanges();
       this.next3.id = this.id;
     }
   }
   if (event.tipo == 'guardar-documentos-entrada') {
     if (event.success) {
       this.calcSigueinte();

       this.cdr.detectChanges();
       this.next4.id = this.id;
       this.next4.verDatos(this.id);
     }
   }
 }
 terminar(event: any) {
   this.confirmationService.confirm({
     target: event.target,
     message: this.textTermina,
     icon: 'pi pi-exclamation-triangle',
     accept: () => {
       let valores = {
         estado: 'COMPLETADO'
       }
       this.service.setModifica(this.id, valores).subscribe(response => {
         if (response.success) {
           this.cerrarForm();

           this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });

         } else {
           this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
         }
       },
         error => {
           this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });

         });

       this.messageService.add({ severity: 'info', summary: this.modulo, detail: 'Se termino ' + this.modulo });
     },
     reject: () => {
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Cancelo la operación.' });
     }
   });
 }
}

