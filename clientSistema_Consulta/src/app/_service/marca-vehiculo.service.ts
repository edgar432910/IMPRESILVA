import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarcaVehiculo } from '../_model/marcavehiculo';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaVehiculoService extends GenericService<MarcaVehiculo> {
  marcaVehiculoCambio: Subject<MarcaVehiculo[]> = new Subject<MarcaVehiculo[]>();
  mensajeCambio: Subject<string> = new Subject<string>();

  constructor(protected override http:HttpClient) {
    super(
      http,
      `${environment.HOST}/MarcaVehiculo`
    );
  }


  
  getMarcaVehiculoCambio(){
    return this.marcaVehiculoCambio.asObservable();
  }

  setMarcaVehiculoCambio(marcaVehiculo: MarcaVehiculo[]){
    this.marcaVehiculoCambio.next(marcaVehiculo);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }

}
