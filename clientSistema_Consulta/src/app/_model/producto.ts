import { Clase } from "./clase";
import { MarcaVehiculo } from "./marcavehiculo";
import { Marca } from "./marca";

import { Proveedor } from "./proveedor";
import { Unidad } from "./unidad";

export class Producto{
    idProducto:number;
    costo:string;
    pais:string;
    codAlterno:string;
    codOriginal:string;
    descripcion:string;
    estado:string;
    facturanumero:string;
    fechaIngreso:string;
    ganacia:string;
    moneda:string;
    tercero:string;
    proveedor:Proveedor;
    clase:Clase;
    marcavehiculo:MarcaVehiculo;
    marca:Marca;
    unidad:Unidad;




}