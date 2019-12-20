import { Component, OnInit } from "@angular/core";
import { Materia } from "../model/materia";
import { Observable } from "rxjs";
import { MateriaService } from "../services/materia.service";

@Component({
  selector: "app-materias-list",
  templateUrl: "./materias-list.component.html",
  styleUrls: ["./materias-list.component.css"]
})
export class MateriasListComponent implements OnInit {
  ci: number;
  materias: Observable<Materia[]>;
  //materiasCursadas: Observable<Materia[]>;
  materiasCursadas: Materia[];
  totalNotas: number;
  cantNotas: number;
  promedio: number;

  constructor(private materiaService: MateriaService) {}

  ngOnInit() {
    this.ci = 12345;
    this.totalNotas = 0;
    this.cantNotas = 0;
    this.promedio = 0;
    this.reloadData();
  }

  reloadData() {
    this.materias = this.materiaService.getMateriasByCedula(this.ci);
    this.materias.forEach(materia => {
      for (let i = 0; i < materia.length; i++) {
        if (materia[i].nota > 1) {
          this.totalNotas = this.totalNotas + materia[i].nota;
          console.log("Notas acumuladas:", this.totalNotas);
          //this.materiasCursadas.push(materia[i]);
          this.cantNotas++;
        }
      }
      console.log("Notas acumuladas:", this.totalNotas);
      this.promedio = this.totalNotas / this.cantNotas;
      console.log("Promedio de notas:", this.promedio);
    });
  }
}
