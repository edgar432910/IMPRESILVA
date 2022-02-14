import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Marca } from 'src/app/_model/marca';
import { MarcaService } from 'src/app/_service/marca.service';
import { MarcaDialogoComponent } from './marca-dialogo/marca-dialogo.component';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  dataSource:MatTableDataSource<Marca>
  displayedColumns: string[] = ['idMarca', 'nombres', 'acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private marcaService:MarcaService, private dialog:MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.marcaService.marcaCambio.subscribe(data=>{
      this.crearTabla(data)
    })

    this.marcaService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.marcaService.listar().subscribe(data => {
     this.crearTabla(data)
    });

  }

  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
    /*this.dataSource.filterPredicate = (data: Paciente, filter: string) => {
      return data.nombres.toLowerCase().includes(filter) || data.apellidos.toLowerCase().includes(filter);
    }})*/
  }
  crearTabla(data: Marca[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(marca?: Marca) {
    this.dialog.open(MarcaDialogoComponent, {
      width: '300px',
      data: marca
    });
  }

  eliminar(marca: Marca) {
    this.marcaService.eliminar(marca.idMarca).pipe(switchMap( ()=> {
      return this.marcaService.listar();
    }))      
    .subscribe(data => {
      this.marcaService.setMarcaCambio(data);
      this.marcaService.setMensajeCambio('SE ELIMINO');
    });
  }

}
