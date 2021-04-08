import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb-general',
  templateUrl: './breadcrumb-general.component.html',
  styleUrls: ['./breadcrumb-general.component.scss']
})
export class BreadcrumbGeneralComponent implements OnInit {
  items: MenuItem[] = [];
  home!: MenuItem;
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
   this.cargar()
    //let res = this.router.url.split("/");
    /* res.forEach(element => {
       if (element != '') {
         if (element != 'incio') {
           this.items.push({ label: element });
         } else {
           this.items.push({ label: 'Inicio' });
         }
       }
     });*/
  }

  getNameMenu(menu: any, bus: any): any {
    var nivel1 = "";
    var nivel2 = "";
    var sw = true;
    var ct1 = false;
    var ct2 = false;
    for (let entry of menu) {
      nivel1 = entry;
      if (entry.routerLink) {
        if (entry.routerLink[0] == bus) {
          ct1 = true;
          break;
        }
      }
      if (entry.items) {
        for (let entry1 of entry.items) {
          if (entry1.routerLink) {
            nivel2 = entry1;
            if (entry1.routerLink[0] == bus) {
              ct2 = true;
              sw = false;
              break;
            }
          }
        }
      }
      if (!sw) {
        break;
      }
    }
    if (!ct1 && ct2) {
      return { "nivel1": nivel1, "nivel2": nivel2 }
    }
    if (ct1 && !ct2) {
      return { "nivel1": nivel1, "nivel2": "" }
    }
    return { "nivel1": "", "nivel2": "" }
  }

   cargar(){
    let menu: any = sessionStorage.getItem('menu_gen');
    if (menu) {
      menu = JSON.parse(menu);
      let bc = this.getNameMenu(menu, this.router.url);
      if (bc.nivel1 != "") {
        this.items.push({ label: bc.nivel1.label });
      }
      if (bc.nivel2 != "") {
        this.items.push({ label: bc.nivel2.label });
      }
    }
    this.home = { icon: 'pi pi-home', routerLink: '/incio' };
  }
}
