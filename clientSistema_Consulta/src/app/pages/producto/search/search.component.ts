import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/_service/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private productoService:ProductoService) { }

  ngOnInit(): void {
  }


  buscar(){
    // this.productoService.buscar()
  }

}
