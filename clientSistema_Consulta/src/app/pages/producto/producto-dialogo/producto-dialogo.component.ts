import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { map, Observable, switchMap } from 'rxjs';
import { Clase } from 'src/app/_model/clase';
import { Marca } from 'src/app/_model/marca';
import { MarcaVehiculo } from 'src/app/_model/marcavehiculo';
import { Producto } from 'src/app/_model/producto';
import { Proveedor } from 'src/app/_model/proveedor';
import { Unidad } from 'src/app/_model/unidad';
import { ClaseService } from 'src/app/_service/clase.service';
import { FamiliaService } from 'src/app/_service/familia.service';
import { MarcaVehiculoService } from 'src/app/_service/marca-vehiculo.service';
import { MarcaService } from 'src/app/_service/marca.service';
import { ProductoService } from 'src/app/_service/producto.service';
import { ProveedorService } from 'src/app/_service/proveedor.service';
import { UnidadService } from 'src/app/_service/unidad.service';

@Component({
  selector: 'app-producto-dialogo',
  templateUrl: './producto-dialogo.component.html',
  styleUrls: ['./producto-dialogo.component.css']
})
export class ProductoDialogoComponent implements OnInit {

  producto:Producto;
  form:FormGroup;

  proveedores:Proveedor[];
  marcasVehiculo:MarcaVehiculo[];
  unidades:Unidad[];
  clases:Clase[];
  marcas:Marca[];

  myControlProveedor: FormControl = new FormControl('',[Validators.required]);
  ProveedorFiltrados$: Observable<Proveedor[]>;

  myControlMarcaVehiculo: FormControl = new FormControl('',[Validators.required]);
  MarcaVehiculoFiltrados$: Observable<MarcaVehiculo[]>;
  
  myControlUnidad: FormControl = new FormControl('',[Validators.required]);
  UnidadFiltrados$: Observable<Unidad[]>;

  myControlClase: FormControl = new FormControl('',[Validators.required]);
  ClaseFiltrados$: Observable<Clase[]>;

  myControlMarca: FormControl = new FormControl('',[Validators.required]);
  MarcaFiltrados$: Observable<Marca[]>;

 

  constructor(
    private dialogRef: MatDialogRef<ProductoDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Producto,
    private proveedorService:ProveedorService,
    private marcaVehiculoService:MarcaVehiculoService,
    private unidadService:UnidadService,
    private claseService: ClaseService,
    private marcaService:MarcaService, 
    private productoService:ProductoService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.proveedorService.listar().subscribe(data=>{
      this.proveedores=data;
    });
    this.marcaVehiculoService.listar().subscribe(data=>{
      this.marcasVehiculo=data;
    });
    this.unidadService.listar().subscribe(data=>{
      this.unidades=data;
    });
    this.claseService.listar().subscribe(data=>{
      this.clases=data;
    });
    this.marcaService.listar().subscribe(data=>{
      this.marcas=data;
    });
   
    this.producto={...this.data};
    
      if (this.producto != null && this.producto.idProducto > 0) {

        this.LLENARCAMPO(this.producto);
        console.log(this.producto);

        this.form= new FormGroup({
          'id': new FormControl(this.producto.idProducto),
          'costo': new FormControl(this.producto.costo,[Validators.required]),
          'pais': new FormControl(this.producto.pais,[Validators.required]),
          'codAlterno': new FormControl(this.producto.codAlterno,[Validators.required]),
          'codOriginal': new FormControl(this.producto.codOriginal,[Validators.required]),
          'descripcion': new FormControl(this.producto.descripcion,[Validators.required]),
          'facturanumero': new FormControl(this.producto.facturanumero,[Validators.required]),
          'fechaIngreso': new FormControl(this.producto.fechaIngreso,[Validators.required]),
          'ganancia': new FormControl(this.producto.ganancia,[Validators.required]),
          'moneda': new FormControl(this.producto.moneda,[Validators.required]),
          'tercero': new FormControl( this.producto.tercero ,[Validators.required]),
          'proveedor': this.myControlProveedor ,
          'clase': this.myControlClase ,
          'marcavehiculo': this.myControlMarcaVehiculo ,
          'marca': this.myControlMarca,
          'unidad': this.myControlUnidad



        });
        
        // this.fb.group({
        //   id:[this..idClase],
        //   nombre:[this..nombre ,  [Validators.required]],
        //   estado:[this..estado , [Validators.required]],
        //   orden:[ this..orden , [Validators.required]],
        //   familia:[this..familia.idFamilia , [Validators.required]]
        // });
      }
      else{
        this.form= new FormGroup({
          'id': new FormControl(0),
          'costo': new FormControl('',[Validators.required]),
          'pais': new FormControl('',[Validators.required]),
          'codAlterno': new FormControl('',[Validators.required]),
          'codOriginal': new FormControl('',[Validators.required]),
          'descripcion': new FormControl('',[Validators.required]),
          'facturanumero': new FormControl('',[Validators.required]),
          'fechaIngreso': new FormControl('',[Validators.required]),
          'ganancia': new FormControl('',[Validators.required]),
          'moneda': new FormControl('',[Validators.required]),
          'tercero': new FormControl('',[Validators.required]),
          'proveedor': this.myControlProveedor ,
          'clase': this.myControlClase ,
          'marcavehiculo': this.myControlMarcaVehiculo ,
          'marca': this.myControlMarca,
          'unidad': this.myControlUnidad
        });
        
      }
      this.ProveedorFiltrados$ = this.myControlProveedor.valueChanges.pipe(map (val => this.filtrarProveedor(val)) );
      this.ClaseFiltrados$     = this.myControlClase.valueChanges.pipe(map (val => this.filtrarClase(val)) );
      this.MarcaVehiculoFiltrados$ = this.myControlMarcaVehiculo.valueChanges.pipe(map (val => this.filtrarMarcaVehiculo(val)) );
      this.MarcaFiltrados$ = this.myControlMarca.valueChanges.pipe(map (val => this.filtrarMarca(val)) );
      this.UnidadFiltrados$ = this.myControlUnidad.valueChanges.pipe(map (val => this.filtrarUnidad(val)) );


  }

  LLENARCAMPO(producto:Producto){
    this.myControlProveedor       = new FormControl(producto.proveedor,[Validators.required]);
    this.myControlClase           = new FormControl(producto.clase,[Validators.required] );
    this.myControlMarcaVehiculo   = new FormControl(producto.marcavehiculo ,[Validators.required] );
    this.myControlMarca           = new FormControl(producto.marca ,[Validators.required] );
    this.myControlUnidad          = new FormControl(producto.unidad ,[Validators.required] );


  }

  filtrarProveedor(val: any) {
    if (val != null && val.idProveedor > 0) {
      return this.proveedores.filter(option =>
        option.nombrecomercial.toLowerCase().includes(val.nombrecomercial.toLowerCase()) );
    } else {
      return this.proveedores.filter(option =>
        option.nombrecomercial.toLowerCase().includes(val?.toLowerCase()) );
    }
  }
  mostrarProveedor(val: any) {
    return val ? `${val.nombrecomercial} ` : val;
  }

  filtrarClase(val: any) {
    if (val != null && val.idClase > 0) {
      return this.clases.filter(option =>
        option.nombre.toLowerCase().includes(val.nombre.toLowerCase()) );
    } else {
      return this.clases.filter(option =>
        option.nombre.toLowerCase().includes(val?.toLowerCase()) );
    }
  }
  mostrarClase(val: any) {
    return val ? `${val.nombre} ` : val;
  }
  
  filtrarMarcaVehiculo(val: any) {
    if (val != null && val.idMarcaVehiculo > 0) {
      return this.marcasVehiculo.filter(option =>
        option.nombre.toLowerCase().includes(val.nombre.toLowerCase()) );
    } else {
      return this.marcasVehiculo.filter(option =>
        option.nombre.toLowerCase().includes(val?.toLowerCase()) );
    }
  }
  mostrarMarcaVehiculo(val: any) {
    return val ? `${val.nombre} ` : val;
  }

  filtrarMarca(val: any) {
    if (val != null && val.idMarca > 0) {
      return this.marcas.filter(option =>
        option.nombre.toLowerCase().includes(val.nombre.toLowerCase()) );
    } else {
      return this.marcas.filter(option =>
        option.nombre.toLowerCase().includes(val?.toLowerCase()) );
    }
  }
  mostrarMarca(val: any) {
    return val ? `${val.nombre} ` : val;
  }

  filtrarUnidad(val: any) {
    if (val != null && val.idUnidad > 0) {
      return this.unidades.filter(option =>
        option.nombre.toLowerCase().includes(val.nombre.toLowerCase()) );
    } else {
      return this.unidades.filter(option =>
        option.nombre.toLowerCase().includes(val?.toLowerCase()) );
    }
  }
  mostrarUnidad(val: any) {
    return val ? `${val.nombre} ` : val;
  }


  operar() {
    if(this.form?.invalid){
      this.form.markAllAsTouched();
      return;
    }
    let productofinal = new Producto();

     productofinal.idProducto = this.form.value['id'];    
     productofinal.costo = this.form.value['costo'];
     productofinal.pais = this.form.value['pais'];
     productofinal.codAlterno = this.form.value['codAlterno'];
     productofinal.codOriginal = this.form.value['codOriginal'];    
     productofinal.descripcion = this.form.value['descripcion'];
     productofinal.estado = this.form.value['estado'];
     productofinal.facturanumero = this.form.value['facturanumero'];
     productofinal.fechaIngreso = this.form.value['fechaIngreso'];    
     productofinal.ganancia = this.form.value['ganancia'];
     productofinal.moneda = this.form.value['moneda'];
     productofinal.tercero = this.form.value['tercero'];

     let ProveedorU = new Proveedor();
     let ClaseU = new Clase();
     let MarcaVehiculoU = new MarcaVehiculo();
     let MarcaU = new Marca();
     let UnidadU = new Unidad();

     ProveedorU.idProveedor=this.form.value['proveedor'].idProveedor;
     ClaseU.idClase=this.form.value['clase'].idClase;
      MarcaVehiculoU.idMarcaVehiculo = this.form.value['marcavehiculo'].idMarcaVehiculo;
      MarcaU.idMarca = this.form.value['marca'].idMarca;
      UnidadU.idUnidad = this.form.value['unidad'].idUnidad;

      productofinal.proveedor= ProveedorU;
      productofinal.clase=ClaseU ;
      productofinal.marcavehiculo=MarcaVehiculoU ;
      productofinal.marca=MarcaU ;
      productofinal.unidad=UnidadU ;

      
     console.log(productofinal);

    if (this.producto != null && this.producto.idProducto > 0) {
      
      
      this.productoService.modificar(productofinal).pipe(switchMap( ()=> {
        return this.productoService.listar();
      }))
      .subscribe(data => {
        this.productoService.setProductoCambio(data);
        this.productoService.setMensajeCambio('SE MODIFICO');
      });
    }else{
      //REGISTRAR
      
      this.productoService.registrar(this.form.value).pipe(switchMap( ()=> {
        return this.productoService.listar();
      }))      
      .subscribe(data => {
        this.productoService.setProductoCambio(data);
        this.productoService.setMensajeCambio('SE REGISTRO');
      });
    }
    this.cerrar();
    
  }

  cerrar() {
    this.dialogRef.close(); 
       
    
  }

}
