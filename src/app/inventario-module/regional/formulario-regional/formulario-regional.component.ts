import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GeneralService } from 'src/app/general/services/general.service';
import { LoaderService } from 'src/app/general/services/loader.service';
import { ValidacionService } from 'src/app/general/services/validacion.service';
import { InventarioRegionalService } from '../../service/inventario-regional.service';

@Component({
  selector: 'app-formulario-regional',
  templateUrl: './formulario-regional.component.html',
  styleUrls: ['./formulario-regional.component.scss']
})
export class FormularioRegionalComponent implements OnInit {
 //generales
 displayHeader="";
 header: string = "proveedor";
 modulo: string = "Proveedor";
 //dialog
 tipo: string="";
 displayFrm: boolean = false;
 //formulario
 formulario!: FormGroup;
 formularioValid: boolean = false;
 param: any = { pais: [] };
 //confirm
 textCrea:string= "¿Esta seguro de guardar los datos?.";
 textEditar:string="¿Esta seguro de modificar los datos?.";
 textEliminar:string="¿Esta seguro de eliminar el registro?.";
 //tiempo animacion pop out confirm
 timeConfirm=250;
 //ver
 datos!:any;
 //emitir datos
 @Output() respform=new EventEmitter();
 constructor(
   private formBuilder: FormBuilder,
   private messageService: MessageService,
   private confirmationService: ConfirmationService,
   private loaderService: LoaderService,
   private generalService: GeneralService,
   private service: InventarioRegionalService,
 ) { }

 ngOnInit(): void {
   this.initForm();
 }
 
 initForm(): void {
   this.formulario = this.formBuilder.group({});
   this.formulario.addControl('id', new FormControl({ value: '0', disabled: false }, []));
   this.formulario.addControl('codigo', new FormControl({ value: '', disabled: false }, [Validators.required]));
   this.formulario.addControl('nombre', new FormControl({ value: '', disabled: false }, [Validators.required]));
   this.formulario.addControl('departamento', new FormControl({ value: '', disabled: false }, [ValidacionService.requiredAutoComplete]));
   this.formulario.addControl('direccion', new FormControl({ value: '', disabled: false }, []));
   this.formulario.addControl('telefono', new FormControl({ value: '', disabled: false }, []));
   this.formularioValid = false;
 }

 resetFormValidUpload() {
   this.formulario.reset();
   this.formularioValid = false;
 }

 getFilter(event: any, tipo: string) {
   let filtro = event.query
   this.generalService.getParam(tipo, filtro).subscribe(response => {
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

 confirmarGuardar(event: any): void {
   let texto =this.textCrea;
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

 guardarDatos(): void {
   let data = this.formulario.value;

   this.service.set(data).subscribe(response => {
     if (response.success) {
       this.respform.emit({tipo:this.tipo,success:true,message:response.message});
       this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
       this.displayFrm = false;

     } else {
       this.respform.emit({tipo:this.tipo,success:false,message:response.message});
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
     }
   },
     error => {
       this.respform.emit({tipo:this.tipo,success:false,message:error.message});
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
       this.displayFrm = false;

     });
 }

 confirmarEditar(event: any): void {
   let texto =this.textEditar;
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

 modificarDatos(): void {
   //this.formulario.get('codigo')?.enable();
   let data = this.formulario.value;
   //this.formulario.get('codigo')?.disable();

       let valores={
         //codigo: data.codigo,
         nombre: data.nombre,
         departamento:data.departamento,
         direccion: data.direccion,
         telefono: data.telefono
         };
   this.service.setEdita(valores,data.id).subscribe(response => {
     if (response.success) {
       this.respform.emit({tipo:this.tipo,success:true,message:response.message});
       this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
       this.displayFrm = false;

     } else {
       this.respform.emit({tipo:this.tipo,success:false,message:response.message});
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
     }
   },
     error => {
       this.respform.emit({tipo:this.tipo,success:false,message:error.message});
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
       this.displayFrm = false;

     });
 }

 crear(): void {
   this.tipo='crear';
   this.resetFormValidUpload();
   this.displayFrm = true;
   this.displayHeader='Formulario '+this.header;
   this.formulario.get('codigo')?.setValue('Por asignar');
   this.formulario.get('codigo')?.disable();
 }

 editar(id:string): void {
   this.tipo='editar';
   this.resetFormValidUpload();
   this.displayHeader='Formulario '+this.header;
   this.formulario.get('codigo')?.disable();
   this.service.getRegistro(id).subscribe(response => {
     if (response.success) {
       let data=response.data;
       let valores={
         id:data.id,
         codigo: data.codigo,
         nombre: data.nombre,
         departamento:data.departamento,
         direccion: data.direccion,
         telefono: data.telefono
         }
       this.formulario.setValue(valores);
       this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
       this.displayFrm = true;

     } else {
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
       this.displayFrm = false;
     }
   },
     error => {
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
       this.displayFrm = false;
     });
 }
 eliminar(event:any,id:string){
    this.confirmationService.close();
    this.tipo="eliminar";
    setTimeout(() => {
      this.confirmationService.confirm({
        target: event.target,
        message: this.textEliminar,
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.service.setElimina(id).subscribe(response => {
            if (response.success) {
             this.respform.emit({tipo:this.tipo,success:true,message:response.message});
              this.messageService.add({ severity: 'success', summary: this.modulo, detail: 'Se consolido el archivo.' });
            } else {
             this.respform.emit({tipo:this.tipo,success:false,message:response.message});
              this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
            }
          },
            error => {
             this.respform.emit({tipo:this.tipo,success:false,message:error.message});
              this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
            });
        },
        reject: () => {
          //reject action
        }
      })
    }, this.timeConfirm);
 }
 ver(id:string): void {
   this.datos=null;
   this.tipo='ver';
   this.displayHeader='Datos '+this.header;
   this.resetFormValidUpload();
   //this.formulario.get('codigo')?.disable();
   this.service.getRegistro(id).subscribe(response => {
     if (response.success) {
       this.datos=response.data;
       this.messageService.add({ severity: 'success', summary: this.modulo, detail: response.message });
       this.displayFrm = true;

     } else {
       this.messageService.add({ severity: 'warn', summary: this.modulo, detail: response.message });
       this.displayFrm = false;
     }
   },
     error => {
       this.messageService.add({ severity: 'error', summary: this.modulo, detail: 'Error al consumir el servicio.' });
       this.displayFrm = false;
     });
 }
}
