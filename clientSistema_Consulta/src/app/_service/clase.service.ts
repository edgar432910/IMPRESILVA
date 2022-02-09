import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clase } from '../_model/clase';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  claseCambio: Subject<Clase[]> = new Subject<Clase[]>();
  mensajeCambio: Subject<string> = new Subject<string>();
  private url: string = `${environment.HOST}/Clase`;  
  constructor(private http:HttpClient) { }

  
  listar(){
    return this.http.get<Clase[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Clase>(`${this.url}/${id}`);
  }

  registrar(clase : Clase){
    return this.http.post(this.url, clase);
  }

  modificar(clase : Clase){
    return this.http.put(this.url, clase);
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }



}
