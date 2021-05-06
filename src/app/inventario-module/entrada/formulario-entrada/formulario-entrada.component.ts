import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { UtilService } from 'src/app/general/services/util.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioProductoService } from '../../service/inventario-producto.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.component.html',
  styleUrls: ['./formulario-entrada.component.scss']
})
export class FormularioEntradaComponent implements OnInit {
  //generales
  displayHeader = "";
  header: string = "entrada";
  modulo: string = "Entrada";
  items!: MenuItem[];
  //steap
  activeIndex: number = 0;
  txtAnt: string = 'anterior';
  txtSig: string = 'siguiente';
  maxIndex: number = 0;
  //ver
  displayFrm: boolean = false;

  //confirm
  textCrea: string = "¿Esta seguro de guardar los datos?. Verifique antes de confirmar.";
  textEditar: string = "¿Esta seguro de modificar los datos?.";
  textEliminar: string = "¿Esta seguro de eliminar el registro?.";
  //tiempo animacion pop out confirm
  timeConfirm = 250;

  //emitir datos
  @Output() respform = new EventEmitter();
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loaderService: LoaderService,
    private generalService: GeneralService,
    private service: InventarioProductoService,
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
    if (this.activeIndex < this.maxIndex - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = this.maxIndex - 1;
      this.termina();
    }
  }

  anterior(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
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
    this.displayFrm = true;
  }

  editar(id: string): void {
    this.displayFrm = true;
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

  confirm(event: any) {

    
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
      },
      reject: () => {
        //reject action
      }
    });
  }
}

