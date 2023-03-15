import { DetalleFactura } from './detalle-factura';
import { Cliente } from '../clientes/cliente';

export class Factura {

    id: number;
    descripcion: string;
    detalles: Array<DetalleFactura>=[];
    cliente: Cliente;
    total: number;
    createAt: string;
}
