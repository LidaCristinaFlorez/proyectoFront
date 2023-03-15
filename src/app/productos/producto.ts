import { Marca } from "./marca";
import { Categoria } from "./categoria";
import { Color } from "./color";
import { Talla } from "./talla";

export class Producto {

    id: number;
    descripcion: string;
    precio: number;
    imagen: string;
    marca: Marca;
    categoria: Categoria;
    color: Color;
    talla: Talla;
    


}
