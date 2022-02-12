
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Familia } from '../_model/familia';
import { GenericService } from './generic.service';



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

  // listar(){
  //   return this.http.get<Familia[]>(this.url);
  // }

  // listarPorId(id: number){
  //   return this.http.get<Familia>(`${this.url}/${id}`);
  // }

  // registrar(familia : Familia){
  //   return this.http.post(this.url, familia);
  // }

  // modificar(familia : Familia){
  //   return this.http.put(this.url, familia);
  // }

  // eliminar(id: number){
  //   return this.http.delete(`${this.url}/${id}`);
  // }

}
