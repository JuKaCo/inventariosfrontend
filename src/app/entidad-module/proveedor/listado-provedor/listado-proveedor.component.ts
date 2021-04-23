import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrls: ['./listado-proveedor.component.scss']
})
export class ListadoProveedorComponent implements OnInit {
  //titulo
  titulo:string="";

  constructor() { 
    let menu_gen_active:any = sessionStorage.getItem('menu_gen_active');
    if (menu_gen_active != null) {
      menu_gen_active = JSON.parse(menu_gen_active + '');
      this.titulo= menu_gen_active.descripcion;
    }
  }

  ngOnInit(): void {
  }

}
