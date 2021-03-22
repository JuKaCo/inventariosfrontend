import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor() { }
  /*
    NotificacionService.mostrar('titulo','texto','success');
    NotificacionService.mostrar('titulo','texto','info');
    NotificacionService.mostrar('titulo','texto','error');
    NotificacionService.mostrar('titulo','texto','warning');
    NotificacionService.goTop();
  */

  static mostrar(titulo: string, texto: string, tipo: string) {
    let data = { 'tipo': 'notificacion', 'data': { 'titulo': titulo, 'texto': texto, 'tipo': tipo } };
  }
  static mostrarTiempo(titulo: string, texto: string, tipo: string, tiempo: number) {
    let data = { 'tipo': 'notificacion', 'data': { 'titulo': titulo, 'texto': texto, 'tipo': tipo, 'tiempo': tiempo } };
  }
  static goTop() {
    let data = { 'tipo': 'scrollTop' }
  }

}
