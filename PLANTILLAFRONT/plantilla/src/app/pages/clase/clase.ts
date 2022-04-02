import { Auditoria } from "src/app/shared/_model/auditoria";
import { Familia } from "../familia/familia";


export class Clase extends Auditoria{
    idClase:number;
    utilidad:Number;
    familia:Familia;
}