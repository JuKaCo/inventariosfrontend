export class UtilService {
    constructor() { }
    static modComboNull(data: any, datos: any): any {
        for (let dato of datos) {
            if (typeof data[dato] !== "object") {
                data[dato] = {};
            } else {
                if (data[dato] == null) {
                    data[dato] = {};
                }
            }
        }
        return data;
    }
    static modNullEspacio(data:any):any{
        return  JSON.parse(JSON.stringify(data).replace(/null/g, '""'));
    }
}