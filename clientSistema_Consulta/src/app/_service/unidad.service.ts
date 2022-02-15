import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unidad } from '../_model/unidad';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UnidadService extends GenericService<Unidad> {

  unidadCambio: Subject<Unidad[]> = new Subject<Unidad[]>();
  mensajeCambio: Subject<string> = new Subject<string>();

  constructor(protected override http:HttpClient) {
    super(
      http,
      `${environment.HOST}/Unidad`
    );
  }

  
  getUnidadCambio(){
    return this.unidadCambio.asObservable();
  }

  setMarcaVehiculoCambio(unidad: Unidad[]){
    this.unidadCambio.next(unidad);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }
}
