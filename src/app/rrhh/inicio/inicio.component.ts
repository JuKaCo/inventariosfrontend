import { Component, OnInit } from '@angular/core';
import { RrhhService } from '../service/rrhh.service';
import { MessageService } from 'primeng/api';
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

  listaBiometrico: any = [];
  filterBiometrico: any = [];
  constructor(
    private rrhhService: RrhhService,
    private messageService: MessageService,
    //private loaderService: LoaderService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.cargaBiome();
    this.initrepBioForm();
  }
  cargaBiome() {
    //this.loaderService.show();
    this.rrhhService.getListaBiometrico().subscribe(response => {
      if (response.success) {
        this.listaBiometrico = response.data;
      } else {
        this.listaBiometrico = [];
      }
      //this.loaderService.hide();
    },
      error => {
        console.log(error.error.message);
        //this.loaderService.hide();
        this.messageService.add({ severity: 'error', summary: 'Parametrica', detail: 'Datos correctos.' });
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
  onSubmitReporteBiometrico(){

  }
}
