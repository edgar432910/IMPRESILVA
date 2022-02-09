import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Familia } from 'src/app/_model/familia';
import { FamiliaService } from 'src/app/_service/familia.service';

@Component({
  selector: 'app-familia-edicion',
  templateUrl: './familia-edicion.component.html',
  styleUrls: ['./familia-edicion.component.css']
})
export class FamiliaEdicionComponent implements OnInit {
  id: number = 0;
  edicion: boolean = false;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private familiaService:FamiliaService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'estado': new FormControl(''),
      'orden': new FormControl('')
    });

    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.initForm();
    });


  }

  initForm() {
    if (this.edicion) {
      this.familiaService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'id': new FormControl(data.idFamilia),
          'nombre': new FormControl(data.nombre),
          'estado': new FormControl(data.estado),
          'orden': new FormControl(data.orden)
        });
      });
    }
  }


  operar(){
    let familia = new Familia();
    familia.idFamilia = this.form.value['id'];
    familia.nombre = this.form.value['nombre'];
    familia.estado = this.form.value['estado'];
    familia.orden = this.form.value['orden'];

    if(this.edicion){

      this.familiaService.modificar(familia).subscribe(()=>{
        this.familiaService.listar().subscribe((data=>{
          this.familiaService.familiaCambio.next(data);
          this.familiaService.mensajeCambio.next('SE Actualizo')
        }));
      });

    }else{
      this.familiaService.registrar(familia).subscribe(()=>{
        this.familiaService.listar().subscribe((data=>{
          this.familiaService.familiaCambio.next(data);
          this.familiaService.mensajeCambio.next('SE Registro')
        }));
      });

    }

    this.router.navigate(['/pages/familia']);
  }

}
