import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Proveedor } from 'src/app/_model/proveedor';
import { ProveedorService } from 'src/app/_service/proveedor.service';
import { ProveedorDialogoComponent } from './proveedor-dialogo/proveedor-dialogo.component';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  dataSource:MatTableDataSource<Proveedor>
  displayedColumns: string[] = ['idProveedor', 'ruc','razonsocial', 'acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private proveedorService:ProveedorService, 
    private dialog:MatDialog, private snackBar: MatSnackBar
    ) { }

  

  ngOnInit(): void {

    this.proveedorService.proveedorCambio.subscribe(data=>{
      this.crearTabla(data)
    })

    this.proveedorService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.proveedorService.listar().subscribe(data => {
     this.crearTabla(data)
    });

  }

  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
    /*this.dataSource.filterPredicate = (data: Paciente, filter: string) => {
      return data.nombres.toLowerCase().includes(filter) || data.apellidos.toLowerCase().includes(filter);
    }})*/
  }
  crearTabla(data: Proveedor[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(proveedor?: Proveedor) {
    this.dialog.open(ProveedorDialogoComponent, {
      width: '320px',
      data: proveedor
    });
  }

  eliminar(proveedor: Proveedor) {
    this.proveedorService.eliminar(proveedor.idProveedor).pipe(switchMap( ()=> {
      return this.proveedorService.listar();
    }))      
    .subscribe(data => {
      this.proveedorService.setProveedorCambio(data);
      this.proveedorService.setMensajeCambio('SE ELIMINO');
    });
  }

}
