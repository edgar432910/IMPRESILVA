import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Familia } from 'src/app/_model/familia';
import { FamiliaService } from 'src/app/_service/familia.service';

@Component({
  selector: 'app-familia-dialogo',
  templateUrl: './familia-dialogo.component.html',
  styleUrls: ['./familia-dialogo.component.css']
})
export class FamiliaDialogoComponent implements OnInit {

  familia:Familia;

  constructor(
    private dialogRef: MatDialogRef<FamiliaDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Familia,
    private familiaService: FamiliaService
  ) { }

  ngOnInit(): void {

    this.familia={...this.data};


  }

  
  operar() {
    if (this.familia != null && this.familia.idFamilia > 0) {
      //MODIFICAR
      this.familiaService.modificar(this.familia).pipe(switchMap( ()=> {
        return this.familiaService.listar();
      }))
      .subscribe(data => {
        this.familiaService.setFamiliaCambio(data);
        this.familiaService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.familiaService.registrar(this.familia).pipe(switchMap( ()=> {
        return this.familiaService.listar();
      }))      
      .subscribe(data => {
        this.familiaService.setFamiliaCambio(data);
        this.familiaService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }

}
