import { TipoDocumento } from './tipoDocumento';
import {Factura} from '../facturas/factura';


export class Cliente {
    id: number;
    numeroDocumento: string;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    contrasena: string;
    tipoDocumento: TipoDocumento;

    private facturas: Array<Factura> = [];
    

}
