
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Familia } from '../_model/familia';



@Injectable({
  providedIn: 'root'
})
export class FamiliaService {
  familiaCambio: Subject<Familia[]> = new Subject<Familia[]>();
  mensajeCambio: Subject<string> = new Subject<string>();

  private url: string = `${environment.HOST}/Familia`;  

  constructor( private http:HttpClient) { }

  listar(){
    return this.http.get<Familia[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Familia>(`${this.url}/${id}`);
  }

  registrar(familia : Familia){
    return this.http.post(this.url, familia);
  }

  modificar(familia : Familia){
    return this.http.put(this.url, familia);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
