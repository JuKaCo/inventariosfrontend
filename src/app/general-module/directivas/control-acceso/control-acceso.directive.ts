import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[controlAcceso]'
})
export class ControlAccesoDirective {

  @Input() controlAcceso!: string;
  el!: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }
  ngOnInit() {
    let menu_gen_active = sessionStorage.getItem('menu_gen_active');
    if (menu_gen_active == null) {
      this.el.nativeElement.style.display = 'none';
    } else {
      menu_gen_active = JSON.parse(menu_gen_active + '');
      let val = menu_gen_active?.indexOf(this.controlAcceso);
      if(val==-1){
        this.el.nativeElement.style.display = 'none';
      }
    }

  }
}
