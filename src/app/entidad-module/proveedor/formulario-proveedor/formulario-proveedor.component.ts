import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';

@Component({
  selector: 'app-formulario-proveedor',
  templateUrl: './formulario-proveedor.component.html',
  styleUrls: ['./formulario-proveedor.component.scss']
})
export class FormularioProveedorComponent implements OnInit {
  //generales
  header: string = "Formulario proveedor";
  modulo: string = "Proveedor";
  //dialog
  tipo: string = "crear";
  displayFrm: boolean = false;
  //formulario
  formulario!: FormGroup;
  formularioValid: boolean = false;
  param:any={pais:[]};
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private loaderService: LoaderService,
    private generalService:GeneralService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() :void{
    this.formulario = this.formBuilder.group({});
    this.formulario.addControl('id', new FormControl({ value: '0', disabled: false }, []));
    this.formulario.addControl('codigo', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('nombre', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('pais', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
    this.formulario.addControl('direccion', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formulario.addControl('comentarios', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.formularioValid = false;
  }
  resetFormValidUpload() {
    this.formulario.reset();
    this.formularioValid = false;
  }

  getFilter(event:any, tipo:string){
    let filtro=event.query
    this.generalService.getParam(tipo,filtro).subscribe(response => {
      if (response.success) {
        this.param.pais = response.data;
      } else {
        this.param.pais = [];
      }
    },
      error => {

        this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
      });
  }
  confirmarGuardar(event: any):void {
    let texto = "Esta seguro de guardar los datos.";
    if (this.formulario.valid) {
      this.confirmationService.confirm({
        target: event.target,
        message: texto,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.guardarDatos();
        },
        reject: () => {
          //reject action
        }
      });

    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formularioValid = true;
    }
  }
  guardarDatos() :void{
    console.log(this.formulario.value);
    this.displayFrm=false;
  }

  confirmarEditar(event: any) :void{
    let texto = "Esta seguro de modificar los datos.";
    if (this.formulario.valid) {
      this.confirmationService.confirm({
        target: event.target,
        message: texto,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.modificarDatos();
        },
        reject: () => {
          //reject action
        }
      });

    } else {
      this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Datos incorrectos.' });
      this.formularioValid = true;
    }
  }
  modificarDatos():void {
    this.displayFrm=false;
  }
  crear():void{
    this.resetFormValidUpload();
    this.displayFrm=true;
    this.formulario.get('codigo')?.setValue('Por asignar');
    this.formulario.get('codigo')?.disable();
  }
}
