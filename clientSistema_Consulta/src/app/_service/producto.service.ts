import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../_model/producto';
import { ProductoSeach } from '../_model/productoSearch';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends GenericService<Producto> {

  productoCambio: Subject<Producto[]> = new Subject<Producto[]>();
  mensajeCambio: Subject<string> = new Subject<string>();

  constructor(
    protected override http:HttpClient
  ) {
    super(http,
      `${environment.HOST}/Producto`);
  }

  buscar(p:ProductoSeach) {
    return this.http.post<Producto[]>(`${environment.HOST}/Producto/search`,p);
  }
  
  listarPageable(p:number, s:number){
    return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`)
  }
  getProductoCambio(){
    return this.productoCambio.asObservable();
  }

  setProductoCambio(producto: Producto[]){
    this.productoCambio.next(producto);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }

}
