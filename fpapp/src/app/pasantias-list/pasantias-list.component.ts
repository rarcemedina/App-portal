import { Component, OnInit } from '@angular/core';
import { PasantiaService } from '../services/pasantia.service';
import { Observable } from 'rxjs';
import { Pasantia } from '../model/pasantia';

@Component({
  selector: 'app-pasantias-list',
  templateUrl: './pasantias-list.component.html',
  styleUrls: ['./pasantias-list.component.css']
})
export class PasantiasListComponent implements OnInit {

  ci: number;
  pasantias: Observable<Pasantia[]>;
  pasantiasHechas: Observable<Pasantia[]>;
  totalDoc: number;
  cantDoc: number;
  faltaDoc: number;

  constructor(private pasantiaService: PasantiaService) { }

  ngOnInit() {
    this.ci = 12345;
    this.totalDoc = 5;
    this.cantDoc = 0;
    this.faltaDoc = 0;
    this.reloadData();
  }

  reloadData() {
    this.pasantias = this.pasantiaService.getPasantiasByCedula(this.ci);
    this.pasantias.forEach(pasantia => {
      for (let i = 0; i < pasantia.length; i++) {
        if (pasantia[i].progreso == 1) {
          //this.materiasCursadas[i] = materia[i];
          this.cantDoc++;
        }
      }
      this.faltaDoc = this.totalDoc - this.cantDoc;
    });
  }
}
