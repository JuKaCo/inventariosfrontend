import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidacionService } from '../services/validacion.service';
@Component({
  selector: 'app-mesaje-form-error',
  templateUrl: './mesaje-form-error.component.html',
  styleUrls: ['./mesaje-form-error.component.scss']
})
export class MesajeFormErrorComponent implements OnInit {

  @Input() control: any;
  @Input() valid: boolean=true;
  constructor() { }

  get errorMessage() {
    if(this.control!=undefined){
      for (let propertyName in this.control.errors) {
        if ((this.control.errors.hasOwnProperty(propertyName) && this.control.invalid && this.control.touched||this.valid)) {
         return ValidacionService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    
    
    return null;
  }

  ngOnInit(): void {
  }
}
