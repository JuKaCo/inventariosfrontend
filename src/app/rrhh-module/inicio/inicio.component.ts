import { Component, OnInit } from '@angular/core';
import { RrhhService } from '../service/rrhh.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { LoaderService } from 'src/app/general/services/loader.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  repBioForm: FormGroup = new FormGroup({});
  repBioFormValid: boolean = false;
  es: any;

  listaBiometrico: any = [];
  filterBiometrico: any = [];
  constructor(
    private rrhhService: RrhhService,
    private messageService: MessageService,
    private loaderService: LoaderService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit(): void {
    this.cargaBiome();
    this.initrepBioForm();
  }
  cargaBiome() {
    this.loaderService.show();
    this.rrhhService.getListaBiometrico().subscribe(response => {
      if (response.success) {
        this.listaBiometrico = response.data;
      } else {
        this.listaBiometrico = [];
      }
      this.loaderService.hide();
    },
      error => {
        this.loaderService.hide();
        this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos incorrectos.' });
      });
  }

  getFilterBiometrico(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.listaBiometrico.length; i++) {
      let item = this.listaBiometrico[i];
      if (item.valor.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }
    this.filterBiometrico = filtered;
  }

  initrepBioForm() {
    this.repBioForm = this.formBuilder.group({
      biometrico: new FormControl({ value: '', disabled: false }, [Validators.required]),
      fini: new FormControl({ value: '', disabled: false }, [Validators.required]),
      ffin: new FormControl({ value: '', disabled: false }, [Validators.required]),
      hini: new FormControl({ value: '08:30', disabled: false }, [Validators.required]),
      hfin: new FormControl({ value: '04:30', disabled: false }, [Validators.required]),
      hto: new FormControl({ value: '00:05', disabled: false }, [Validators.required]),
    })
  }
  onSubmitReporteBiometrico(event: any) {
    if (this.repBioForm.valid) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Esta seguro de generar el reporte',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Se empieza a generar el reporte' });

          this.rrhhService.generarReporteGeneral(this.repBioForm.value).subscribe(response => {
            this.messageService.add({ severity: 'success', summary: 'Reporte', detail: 'Se genero correctamente.' });
            let blob: any = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            window.open(url);
          },
            error => {
              this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'No se pudo generar el reporte' });
            });

        },
        reject: () => {
          this.messageService.add({ severity: 'info', summary: 'Rechazada', detail: 'Has rechazado hacer la acción' });
        }
      });

    } else {
      this.repBioFormValid = true;
      this.messageService.add({ severity: 'warn', summary: 'Generar reprote', detail: 'Datos incorrectos.' });
    }
  }
}
