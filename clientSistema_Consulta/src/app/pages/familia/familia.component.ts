import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Familia } from 'src/app/_model/familia';
import { FamiliaService } from 'src/app/_service/familia.service';
import { FamiliaDialogoComponent } from './familia-dialogo/familia-dialogo.component';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  dataSource:MatTableDataSource<Familia>
  displayedColumns: string[] = ['idFamilia', 'nombres', 'acciones'];
  cantidad:number=0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( private famiiliaService:FamiliaService,  private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.famiiliaService.familiaCambio.subscribe(data=>{
      this.crearTabla(data)
    })

    this.famiiliaService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.famiiliaService.listarPageable(0,10).subscribe( data =>{
      this.cantidad= data.totalElements;
     this.crearTabla(data.content);

    })

    // this.famiiliaService.listar().subscribe(data => {
    //  this.crearTabla(data)
    // });
  }

  mostrarMas(e:any){
    this.famiiliaService.listarPageable(e.pageIndex,e.pageSize).subscribe( data =>{
      this.cantidad= data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
    })
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
    /*this.dataSource.filterPredicate = (data: Paciente, filter: string) => {
      return data.nombres.toLowerCase().includes(filter) || data.apellidos.toLowerCase().includes(filter);
    }})*/
  }
  crearTabla(data: Familia[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(familia?: Familia) {
    this.dialog.open(FamiliaDialogoComponent, {
      width: '300px',
      data: familia
    });
  }

  eliminar(familia: Familia) {
    this.famiiliaService.eliminar(familia.idFamilia).pipe(switchMap( ()=> {
      return this.famiiliaService.listar();
    }))      
    .subscribe(data => {
      this.famiiliaService.setFamiliaCambio(data);
      this.famiiliaService.setMensajeCambio('SE ELIMINO');
    });
  }

}
