import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Producto } from 'src/app/_model/producto';
import { ProductoService } from 'src/app/_service/producto.service';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  dataSource:MatTableDataSource<Producto>;
  displayedColumns: string[] = ['idProducto','clase', 'marca', 'codAlterno','codOriginal','descripcion', 'acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productoService:ProductoService , private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    
    this.productoService.productoCambio.subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
    this.productoService.mensajeCambio.subscribe(data=>{
      this.snackBar.open(data, 'Aviso', {duration:20000});
    });
    this.productoService.listar().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });


  }


  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
    /*this.dataSource.filterPredicate = (data: Paciente, filter: string) => {
      return data.nombres.toLowerCase().includes(filter) || data.apellidos.toLowerCase().includes(filter);
    }})*/
  }

  crearTabla(data: Producto[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(producto?: Producto) {
    this.dialog.open(ProductoDialogoComponent, {
      width: '500px',
      data: producto
    });
  }

  eliminar(producto: Producto) {
    this.productoService.eliminar(producto.idProducto).pipe(switchMap( ()=> {
      return this.productoService.listar();
    }))      
    .subscribe(data => {
      this.productoService.setProductoCambio(data);
      this.productoService.setMensajeCambio('SE ELIMINO');
    });
  }

}
