import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Unidad } from 'src/app/_model/unidad';
import { UnidadService } from 'src/app/_service/unidad.service';

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
  }

}
