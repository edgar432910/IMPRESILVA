import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { MarcaVehiculo } from 'src/app/_model/marcavehiculo';
import { MarcaVehiculoService } from 'src/app/_service/marca-vehiculo.service';
import { MarcavehiculoDialogoComponent } from './marcavehiculo-dialogo/marcavehiculo-dialogo.component';

@Component({
  selector: 'app-marcavehiculo',
  templateUrl: './marcavehiculo.component.html',
  styleUrls: ['./marcavehiculo.component.css']
})
export class MarcavehiculoComponent implements OnInit {
  dataSource:MatTableDataSource<MarcaVehiculo>
  displayedColumns: string[] = ['idMarcavehiculo', 'nombres', 'acciones'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private marcaVehiculoService:MarcaVehiculoService, private dialog:MatDialog, private snackBar: MatSnackBar) { }


  ngOnInit(): void {

    
    this.marcaVehiculoService.marcaVehiculoCambio.subscribe(data=>{
      this.crearTabla(data)
    })

    this.marcaVehiculoService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.marcaVehiculoService.listar().subscribe(data => {
     this.crearTabla(data)
    });


  }
  
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
    /*this.dataSource.filterPredicate = (data: Paciente, filter: string) => {
      return data.nombres.toLowerCase().includes(filter) || data.apellidos.toLowerCase().includes(filter);
    }})*/
  }
  crearTabla(data: MarcaVehiculo[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(marcaVehiculo?: MarcaVehiculo) {
    this.dialog.open(MarcavehiculoDialogoComponent, {
      width: '300px',
      data: marcaVehiculo
    });
  }

  eliminar(MarcaVehiculo: MarcaVehiculo) {
    this.marcaVehiculoService.eliminar(MarcaVehiculo.idMarcaVehiculo).pipe(switchMap( ()=> {
      return this.marcaVehiculoService.listar();
    }))      
    .subscribe(data => {
      this.marcaVehiculoService.setMarcaVehiculoCambio(data);
      this.marcaVehiculoService.setMensajeCambio('SE ELIMINO');
    });
  }


}
