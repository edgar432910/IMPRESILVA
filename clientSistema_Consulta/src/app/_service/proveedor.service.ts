import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proveedor } from '../_model/proveedor';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends GenericService<Proveedor> {
  proveedorCambio: Subject<Proveedor[]> = new Subject<Proveedor[]>();
  mensajeCambio: Subject<string> = new Subject<string>();


  constructor(  
    protected override http:HttpClient
  ) {
    super(http,
      `${environment.HOST}/Proveedor`);
  }

  
  getProveedorCambio(){
    return this.proveedorCambio.asObservable();
  }

  setProveedorCambio(proveedor: Proveedor[]){
    this.proveedorCambio.next(proveedor);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }



}
