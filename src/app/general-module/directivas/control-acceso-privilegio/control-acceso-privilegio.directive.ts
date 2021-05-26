import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[controlAccesoPrivilegio]'
})
export class ControlAccesoPrivilegioDirective {

  el!: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }
  ngOnInit() {
    let privilegio: any = sessionStorage.getItem('privilegio');
    let regional: any = sessionStorage.getItem('regional');
    if (privilegio != 'total')
      this.el.nativeElement.style.display = 'none';
  }
}
