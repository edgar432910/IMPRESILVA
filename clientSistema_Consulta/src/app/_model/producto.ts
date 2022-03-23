import { Clase } from "./clase";
import { MarcaVehiculo } from "./marcavehiculo";
import { Marca } from "./marca";

import { Proveedor } from "./proveedor";
import { Unidad } from "./unidad";

export class Producto{
    idProducto:number;
    codigo1:string;
    codigo2:string;
    codigo3:string;
    codigo4:string;
    nombre:string;
    nombre2:string;
    factura1:string;
    factura2:string;
    factura3:string;
    costo:number;
    pais:string;
    monedaid:string;
   
   

    proveedor:Proveedor;
    clase:Clase;
    marcavehiculo:MarcaVehiculo;
    marca:Marca;
    unidad:Unidad;




}