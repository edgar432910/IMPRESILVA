import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Familia } from './familia';
import { FamiliaService } from './familia.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styles: [
  ]
})
export class FamiliaComponent implements OnInit {

  cantidad:number=0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data:Familia[];

  constructor(private famiiliaService:FamiliaService,  private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.famiiliaService.familiaCambio.subscribe(data=>{
      this.data = data;
    })

    this.famiiliaService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.famiiliaService.listarPageable(0,10).subscribe( data =>{
      this.cantidad= data.totalElements;
      this.data = data.content;
      console.log(data)


    })
  }
  mostrarMas(e:any){
    this.famiiliaService.listarPageable(e.pageIndex,e.pageSize).subscribe( data =>{
      this.cantidad= data.totalElements;
      this.data = data.content;
    })
  }

}
