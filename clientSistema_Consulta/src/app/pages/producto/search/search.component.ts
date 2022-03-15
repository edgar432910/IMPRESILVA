import { Component, OnInit } from '@angular/core';
import { ProductoSeach } from 'src/app/_model/productoSearch';
import { ProductoService } from 'src/app/_service/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  search:ProductoSeach = new ProductoSeach();

  constructor( private productoService:ProductoService) { }

  ngOnInit(): void {

  }


  buscar(){
    this.productoService.buscar(this.search).subscribe( data =>{
      console.log(data);
    })
  }

}
