import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";


//@Injectable({
//  providedIn: 'root'
//})
export class ValidacionService {
  constructor() { }
  static dato1: String = "";
  static dato2: String = "";
  //static Buffer = require('buffer/').Buffer


  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let requiredLength: string = "";
    if (validatorValue && validatorValue.requiredLength != undefined) {
      let requiredLength = String(validatorValue.requiredLength);
    }
    let config: any = {
      required: "Este campo es requerido.",
      requiredAutoComplete: "Este campo es requerido.",
      requiredAutoCompleteMultiple: "Este campo es requerido.",
      invalidEmailAddress: "Correo electrónico inválido",
      invalidNumber: "Introduzca un número válido",
      invalidAlphanumeric: "Introduzca solo letras y numeros",
      invalidDecimal: "Introduzca un número con o sin decimales",
      validateFieldParam: "El campo es inválido",
      validateDate: "La fecha no es válida.",
      greaterZero: "El número debe ser mayor a cero",
      whitespace: "Introduzca un dato válido",
      alfanumericoMayValidator: "Solo se permite numeros y letras mayusculas",
      espaciosValidator: "No se permite espacios en blanco",
      maxlength: "Tamaño máximo " + validatorValue.requiredLength,
      minlength: "Tamaño mínimo " + validatorValue.requiredLength,
      numeroPositivo: "El número deve ser mayor o igual a 0",
      email: "Correo no valido",
      emailValidator: "Correo no valido",
      numberValidator: "No es un valor numérico entero",
      maxlength_int: "Máximo de caracteres: " + this.dato1,
      mixlength_int: "Mínimo de caracteres: " + this.dato1,
      maxkbSize: "Tamaño máximo: " + this.dato1 + " kB | Su tamaño actual: " + this.dato2 + " kB",
      minkbSize: "Tamaño mínimo: " + this.dato1 + " kB | Su tamaño actual: " + this.dato2 + " kB",
    };
    return config[validatorName];
  }

  static dinamico(listvalid: any): ValidatorFn {
    return (control: AbstractControl): any => {
      if (!Array.isArray(listvalid)) { return null }
      for (let valor of listvalid) {
        if (valor.name == "required") {
          let res = this.required(control);
          if (res != null) {
            return res;
          }
        }
        /*if (valor.name == "minkbSize") {
          let res = this.minkbSize(control, valor.value);
          if (res != null) {
            return res;
          }
        }*/
        /*if (valor.name == "maxkbSize") {
          let res = this.maxkbSize(control, valor.value);
          if (res != null) {
            return res;
          }
        }*/
        if (valor.name == "minLength") {
          let res = this.minlength(control, valor.value);
          if (res != null) {
            return res;
          }
        }
        if (valor.name == "maxLength") {
          let res = this.maxlength(control, valor.value);
          if (res != null) {
            return res;
          }
        }
        if (valor.name == "emailValidator") {
          let res = this.emailValidator(control);
          if (res != null) {
            return res;
          }
        }
      }
      return null;
    };
  }
  static required(control: any) {
    //console.log('-->',control.value?.codigo);
    if (
      control.value != undefined &&
      control.value != null &&
      control.value != ""
    ) {
      return null;
    } else {
      return { required: true };
    }
  }

  static requiredAutoComplete(control: any) {
    if (control.value != undefined) {
      if (typeof control.value !== "object") {
        return { requiredAutoComplete: true };
      } else {
        return null;
      }
    } else {
      return { requiredAutoComplete: true };
    }
  }
  static requiredAutoCompleteMultiple(control: any) {
    if (control.value != undefined) {
      if (typeof control.value !== "object") {
        return { requiredAutoCompleteMultiple: true };
      } else {
        if (control.value.lenght) {

        } else {

        }
        return null;
      }
    } else {
      return { requiredAutoComplete: true };
    }
  }


  /*static minkbSize(control:any, valor:any) {
    var str = new String(control.value);
    var Buffer = require('buffer/').Buffer;
    var sizekb = (Buffer.from(str).byteLength)/1024;
    if (sizekb >= valor) {
      return null;
    } else {
      this.dato1 = valor;
      this.dato2 = sizekb.toPrecision(6).toString();
      return { minkbSize: true };
    }
  }*/

  /*static maxkbSize(control:any, valor:any) {
    var str = new String(control.value);
    var Buffer = require('buffer/').Buffer;
    var sizekb = (Buffer.from(str).byteLength)/1024;
    if (sizekb <= valor) {
      return null;
    } else {
      this.dato1 = valor;
      this.dato2 = sizekb.toPrecision(6).toString();
      return { maxkbSize: true };
    }
  }*/

  static minlength(control: any, valor: any) {
    var str = new String(control.value);
    var len = str.length;
    if (len >= valor) {
      return null;
    } else {
      this.dato1 = valor;
      return { mixlength_int: true };
    }
  }

  static maxlength(control: any, valor: any) {
    var str = new String(control.value);
    var len = str.length;
    if (len <= valor) {
      return null;
    } else {
      this.dato1 = valor;
      return { maxlength_int: true };
    }
  }

  static emailValidator(control: any) {
    // RFC 2822 compliant regex
    if (
      (control.value != undefined &&
        control.value.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        )
      ) || control.value == '' || control.value == null
    ) {
      return null;
    } else {
      return { emailValidator: true };
    }
  }

  static numberValidator(control: any) {
    if (
      control.value != null &&
      control.value != undefined &&
      control.value != ""
    ) {
      if (String(control.value).match(/^[0-9]+$/)) {
        return null;
      } else {
        return { numberValidator: true };
      }
    }
    return null;
  }
  
  static alphanumericValidator(control: any) {
    if ((control.value != undefined) != null && control.value != undefined) {
      if (String(control.value).match(/^[-\w\s]+$/)) {
        return null;
      } else {
        return { invalidAlphanumeric: true };
      }
    }
    return null;
  }
  static decimalValidator(control: any) {
    if (control.value != null && control.value != undefined) {
      if (String(control.value).match(/^(?!\.?$)\d{0,6}(\.\d{0,2})?$/)) {
        return null;
      } else {
        return { invalidDecimal: true };
      }
    }
    return null;
  }
  static fieldParamValidatorNotRequired(control: any) {
    let obj2 = {};
    if (
      control.value != undefined &&
      control.value != null &&
      (control.value.cod != undefined || control.value == "")
    ) {
      return null;
    } else if (control.value == undefined || control.value == null) {
      return null;
    } else if (JSON.stringify(control.value) === JSON.stringify(obj2)) {
      return null;
    } else {
      return { validateFieldParam: true };
    }
  }

  static isValidDate(control: any) {
    if (control.value) {
      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(control.value)) {
        return { validateDate: true };
      }
      let parts = control.value.split("/");
      let day = parseInt(parts[0], 10);
      let month = parseInt(parts[1], 10);
      let year = parseInt(parts[2], 10);
      if (year < 1000 || year > 3000 || month == 0 || month > 12) {
        return { validateDate: true };
      }

      let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

      let valDay: boolean = day > 0 && day <= monthLength[month - 1];
      if (!valDay) {
        return { validateDate: true };
      }
    }
    return null;
  }
  static greaterZero(control: any) {
    if (control.value != undefined) {
      if (Number(control.value) > 0) {
        return null;
      } else {
        return { greaterZero: true };
      }
    }
    return null;
  }
  
  static alfanumericoMayValidator(control: any) {
    if (control.value != null && control.value != undefined) {
      let cadena = control.value;
      var regexp = new RegExp("^[0-9A-Z\\s]+$");
      if (regexp.test(cadena)) {
        return null;
      } else {
        return { alfanumericoMayValidator: true };
      }
    }
    return null;
  }
  static espaciosValidator(control: any) {
    if (control.value != null && control.value != undefined) {
      let cadena = control.value;
      if (cadena.indexOf(" ") > -1) {
        return { espaciosValidator: true };
      } else {
        return null;
      }
    }
    return null;
  }
  static numeroPositivo(control: any) {
    if (control.value != undefined) {
      if (Number(control.value) >= 0) {
        return null;
      } else {
        return { numeroPositivo: true };
      }
    }
    return null;
  }
}
