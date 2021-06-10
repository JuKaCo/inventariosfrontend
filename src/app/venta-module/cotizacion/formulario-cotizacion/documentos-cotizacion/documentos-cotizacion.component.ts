import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { VentaCotizacionService } from 'src/app/venta-module/service/venta-cotizacion.service';

@Component({
  selector: 'app-documentos-cotizacion',
  templateUrl: './documentos-cotizacion.component.html',
  styleUrls: ['./documentos-cotizacion.component.scss']
})
export class DocumentosCotizacionComponent implements OnInit {
  modulo:string = "Documentos";
  id:string="";
  //emitir datos
  @Output() respform = new EventEmitter();
  constructor(
    private service: VentaCotizacionService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  guardar(tipo: any) {
    this.respform.emit({ tipo: 'guardar-documentos-entrada', success: true });

  }
  generarCotizacion() {
    this.messageService.add({ severity: 'info', summary: this.modulo, detail: 'Icnicia descarga de documento.' });
    this.service.getReporteCotizacion(this.id).subscribe(response => {
      let blob: any = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se genero correctamentente el documento.' });
    },
      error => {
        this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'No se pudo generar el documento.' });
      });
  }
}
