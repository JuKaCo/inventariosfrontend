import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InventarioEntradaService } from 'src/app/inventario-module/service/inventario-entrada.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-documentos-entrada',
  templateUrl: './documentos-entrada.component.html',
  styleUrls: ['./documentos-entrada.component.scss']
})
export class DocumentosEntradaComponent implements OnInit {
  modulo:string = "Documentos";
  id:string="";
  //emitir datos
  @Output() respform = new EventEmitter();
  constructor(
    private service: InventarioEntradaService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  guardar(tipo: any) {
    this.respform.emit({ tipo: 'guardar-documentos-entrada', success: true });

  }
  generarNotaIngreso() {
    this.messageService.add({ severity: 'info', summary: this.modulo, detail: 'Icnicia descarga de documento.' });
    this.service.getReporteNotaIngreso(1).subscribe(response => {
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
