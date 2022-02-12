import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Marca } from '../_model/marca';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends GenericService<Marca> {
  marcaCambio: Subject<Marca[]> = new Subject<Marca[]>();
  mensajeCambio: Subject<string> = new Subject<string>();

  constructor( protected override http:HttpClient) {
    super( http,
      `${environment.HOST}/Marca`);
  }

  
  getMarcaCambio(){
    return this.marcaCambio.asObservable();
  }

  setMarcaCambio(marca: Marca[]){
    this.marcaCambio.next(marca);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }


}
