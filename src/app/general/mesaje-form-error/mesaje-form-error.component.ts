import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidacionService } from '../services/validacion.service';
@Component({
  selector: 'app-mesaje-form-error',
  templateUrl: './mesaje-form-error.component.html',
  styleUrls: ['./mesaje-form-error.component.scss']
})
export class MesajeFormErrorComponent implements OnInit {

  @Input() control: FormControl = new FormControl;
  @Input() valid: boolean=false;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if ((this.control.errors.hasOwnProperty(propertyName) && this.control.invalid && this.control.touched||this.valid)) {
       return ValidacionService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    
    return null;
  }

  ngOnInit(): void {
  }
}
