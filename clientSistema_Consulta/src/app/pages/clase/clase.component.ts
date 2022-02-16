import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, switchMap } from 'rxjs';
import { Clase } from 'src/app/_model/clase';
import { ClaseService } from 'src/app/_service/clase.service';
import { ClaseDialogoComponent } from './clase-dialogo/clase-dialogo.component';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {

  dataSource:MatTableDataSource<Clase>;
  displayedColumns: string[] = ['idClase', 'nombres','familia', 'acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private claseService:ClaseService , private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.claseService.claseCambio.subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
    this.claseService.mensajeCambio.subscribe(data=>{
      this.snackBar.open(data, 'Aviso', {duration:20000});
    });
    this.claseService.listar().subscribe(data=>{
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

  crearTabla(data: Clase[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(clase?: Clase) {
    this.dialog.open(ClaseDialogoComponent, {
      width: '250px',
      data: clase
    });
  }

  eliminar(clase: Clase) {
    this.claseService.eliminar(clase.idClase).pipe(switchMap( ()=> {
      return this.claseService.listar();
    }))      
    .subscribe(data => {
      this.claseService.setClaseCambio(data);
      this.claseService.setMensajeCambio('SE ELIMINO');
    });
  }

}
