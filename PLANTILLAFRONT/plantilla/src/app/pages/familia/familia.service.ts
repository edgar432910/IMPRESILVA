import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GenericService } from 'src/app/shared/_service/generic.service';
import { environment } from 'src/environments/environment';
import { Familia } from './familia';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService extends GenericService<Familia>{
  familiaCambio: Subject<Familia[]> = new Subject<Familia[]>();
  mensajeCambio: Subject<string> = new Subject<string>();

   

  constructor( protected override http:HttpClient) {
    super(
      http,
      `${environment.HOST}/Familia`
    );
  }
  
  listarPageable(p:number, s:number){
    return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`)
  }

  getFamiliaCambio(){
    return this.familiaCambio.asObservable();
  }

  setFamiliaCambio(familia: Familia[]){
    this.familiaCambio.next(familia);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }



}