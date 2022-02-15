import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Marca } from 'src/app/_model/marca';
import { MarcaService } from 'src/app/_service/marca.service';

@Component({
  selector: 'app-marca-dialogo',
  templateUrl: './marca-dialogo.component.html',
  styleUrls: ['./marca-dialogo.component.css']
})
export class MarcaDialogoComponent implements OnInit {
  marca:Marca;
  form:FormGroup;


  constructor(   private dialogRef: MatDialogRef<MarcaDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Marca,
    private marcaService: MarcaService,
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.marca={...this.data};
    if (this.marca != null && this.marca.idMarca > 0) {

      //MODIFICAR
     this.form= this.fb.group({
         id:[this.marca.idMarca],
          nombre:[this.marca.nombre ,  [Validators.required]],
          estado:[this.marca.estado , [Validators.required]],
          orden:[ this.marca.orden , [Validators.required]],
      })
      
    }else{
      //REGISTRAR
     this.form= this.fb.group({
        id:[0],
         nombre:[ ,  [Validators.required]],
         estado:[ , [Validators.required]],
         orden:[ , [Validators.required]],
     })
     
    }
  }

  
  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let marcafinal=new Marca();
    marcafinal.idMarca  =   this.form.value['id'];
    marcafinal.estado   =   this.form.value['estado'];
    marcafinal.orden    =   this.form.value['orden'];
    marcafinal.nombre   =   this.form.value['nombre'];

   
    if (this.marca != null && this.marca.idMarca > 0) {
     

      //MODIFICAR
      this.marcaService.modificar(marcafinal).pipe(switchMap( ()=> {
        return this.marcaService.listar();
      }))
      .subscribe(data => {
        this.marcaService.setMarcaCambio(data);
        this.marcaService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.marcaService.registrar(this.form.value).pipe(switchMap( ()=> {
        return this.marcaService.listar();
      }))      
      .subscribe(data => {
        this.marcaService.setMarcaCambio(data);
        this.marcaService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }


}
