import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clase } from '../_model/clase';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ClaseService extends GenericService<Clase>{

  claseCambio: Subject<Clase[]> = new Subject<Clase[]>();
  mensajeCambio: Subject<string> = new Subject<string>();
  constructor(protected override http:HttpClient) {
    super(
      http,`${environment.HOST}/Clase`
    );
  }

  
  getClaseCambio(){
    return this.claseCambio.asObservable();
  }

  setClaseCambio(clase: Clase[]){
    this.claseCambio.next(clase);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }



}
