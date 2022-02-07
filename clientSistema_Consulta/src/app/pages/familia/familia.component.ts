import { Component, OnInit } from '@angular/core';
import { FamiliaService } from 'src/app/_service/familia.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent implements OnInit {

  constructor( private famiiliaService:FamiliaService) { }

  ngOnInit(): void {
    this.famiiliaService.listar().subscribe(data=>console.log(data));
  }

}
