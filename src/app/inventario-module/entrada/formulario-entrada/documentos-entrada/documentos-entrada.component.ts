import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-documentos-entrada',
  templateUrl: './documentos-entrada.component.html',
  styleUrls: ['./documentos-entrada.component.scss']
})
export class DocumentosEntradaComponent implements OnInit {
  //emitir datos
  @Output() respform = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  guardar(tipo: any) {
    this.respform.emit({ tipo: 'guardar-documentos-entrada', success: true });
  }
}
