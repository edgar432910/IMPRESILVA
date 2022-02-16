import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { Proveedor } from 'src/app/_model/proveedor';
import { ProveedorService } from 'src/app/_service/proveedor.service';

@Component({
  selector: 'app-proveedor-dialogo',
  templateUrl: './proveedor-dialogo.component.html',
  styleUrls: ['./proveedor-dialogo.component.css']
})
export class ProveedorDialogoComponent implements OnInit {

  proveedor:Proveedor;
  form:FormGroup;


  constructor(private dialogRef: MatDialogRef<ProveedorDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Proveedor,
    private proveedorService: ProveedorService,
    private fb:FormBuilder) { }


  ngOnInit(): void {
    
    this.proveedor={...this.data};
    if (this.proveedor != null && this.proveedor.idProveedor > 0) {

      //MODIFICAR
     this.form= this.fb.group({
          id:[this.proveedor.idProveedor],
          contribuyente:[this.proveedor.contribuyente ,  [Validators.required]],
          departamento:[this.proveedor.departamento , [Validators.required]],
          direccion:[ this.proveedor.direccion , [Validators.required]],
          distrito:[ this.proveedor.distrito , [Validators.required]],
          nombrecomercial:[ this.proveedor.nombrecomercial , [Validators.required]],
          provincia:[ this.proveedor.provincia , [Validators.required]],
          razonsocial:[ this.proveedor.razonsocial , [Validators.required]],
          ruc:[ this.proveedor.ruc , [Validators.required]],
          telefono:[ this.proveedor.telefono , [Validators.required]],
          


      })
      
    }else{
      //REGISTRAR
     this.form= this.fb.group({
          id:[0],
          contribuyente:[ ,  [Validators.required]],
          departamento:[ , [Validators.required]],
          direccion:[ , [Validators.required]],
          distrito:[ , [Validators.required]],
          nombrecomercial:[ , [Validators.required]],
          provincia:[ , [Validators.required]],
          razonsocial:[ , [Validators.required]],
          ruc:[ , [Validators.required]],
          telefono:[ , [Validators.required]],
     })
     
    }
  }


  
  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let proveedorfinal=new Proveedor();
    proveedorfinal.idProveedor  =   this.form.value['id'];
    proveedorfinal.contribuyente   =   this.form.value['contribuyente'];
    proveedorfinal.departamento    =   this.form.value['departamento'];
    proveedorfinal.direccion   =   this.form.value['direccion'];
    proveedorfinal.distrito   =   this.form.value['distrito'];
    proveedorfinal.nombrecomercial   =   this.form.value['nombrecomercial'];
    proveedorfinal.provincia   =   this.form.value['provincia'];
    proveedorfinal.razonsocial   =   this.form.value['razonsocial'];
    proveedorfinal.ruc   =   this.form.value['ruc'];
    proveedorfinal.telefono   =   this.form.value['telefono'];


   
    if (this.proveedor != null && this.proveedor.idProveedor > 0) {
     

      //MODIFICAR
      this.proveedorService.modificar(proveedorfinal).pipe(switchMap( ()=> {
        return this.proveedorService.listar();
      }))
      .subscribe(data => {
        this.proveedorService.setProveedorCambio(data);
        this.proveedorService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      this.proveedorService.registrar(this.form.value).pipe(switchMap( ()=> {
        return this.proveedorService.listar();
      }))      
      .subscribe(data => {
        this.proveedorService.setProveedorCambio(data);
        this.proveedorService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();    
  }

}
