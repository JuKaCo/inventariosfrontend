import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload/fileupload';

@Component({
  selector: 'app-listado-liname',
  templateUrl: './listado-liname.component.html',
  styleUrls: ['./listado-liname.component.scss']
})
export class ListadoLinameComponent implements OnInit {
  displayFrmUpload:boolean=false;
  uploadForm!: FormGroup;
  uploadFormValid: boolean = false;
  @ViewChild('fubauto') fubauto!: FileUpload ;
  autoResize=true;
  

  totalRecords:number=0;
  loading: boolean=false;
  rows:number = 10;
  first:number = 0;

  listaLiname:any=[{
    uno:"uno",
    uno1:"uno",
    uno2:"uno",
  },
  {
    uno:"uno",
    uno1:"uno",
    uno2:"uno",
  }];

  

  constructor( 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initFormValidUpload();
  }

  loadData(event :LazyLoadEvent){
    this.loading = true;

    this.loading = false;
  }
  reset(){
    this.first = 0;
  }
  dialogAddLiname(){
    this.displayFrmUpload=true;
    this.resetFormValidUpload();
  }
  initFormValidUpload() {
    this.uploadForm = this.formBuilder.group({});
    this.uploadForm.addControl('comentarios', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.uploadForm.addControl('archivo', new FormControl({ value: '', disabled: false }, [Validators.required]));
    this.uploadFormValid = false;
    this.displayFrmUpload = false;
  }
  updateUpload(dato:any) {
    let comen = this.uploadForm.value['comentarios'];
    this.uploadForm.setValue({ comentarios: comen, archivo: dato });
  }
  resetFormValidUpload() {
    this.uploadForm.reset();
    this.uploadFormValid = false;
    this.fubauto.clear();
  }
}
