import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Unidad } from 'src/app/_model/unidad';
import { UnidadService } from 'src/app/_service/unidad.service';
import { UnidadDialogoComponent } from './unidad-dialogo/unidad-dialogo.component';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  dataSource:MatTableDataSource<Unidad>
  displayedColumns: string[] = ['idUnidad', 'nombres', 'acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private unidadService:UnidadService, private dialog:MatDialog
    , private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.unidadService.unidadCambio.subscribe(data=>{
      this.crearTabla(data)
    })

    this.unidadService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.unidadService.listar().subscribe(data => {
     this.crearTabla(data)
    });

  }

  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
    /*this.dataSource.filterPredicate = (data: Paciente, filter: string) => {
      return data.nombres.toLowerCase().includes(filter) || data.apellidos.toLowerCase().includes(filter);
    }})*/
  }
  crearTabla(data: Unidad[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(unidad?: Unidad) {
    this.dialog.open(UnidadDialogoComponent, {
      width: '300px',
      data: unidad
    });
  }

  eliminar(unidad: Unidad) {
    this.unidadService.eliminar(unidad.idUnidad).pipe(switchMap( ()=> {
      return this.unidadService.listar();
    }))      
    .subscribe(data => {
      this.unidadService.setUnidadCambio(data);
      this.unidadService.setMensajeCambio('SE ELIMINO');
    });
  }

}
