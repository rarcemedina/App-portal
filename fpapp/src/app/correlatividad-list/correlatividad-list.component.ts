import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Materia } from "../model/materia";
import { MateriaService } from "../services/materia.service";

@Component({
  selector: "app-correlatividad-list",
  templateUrl: "./correlatividad-list.component.html",
  styleUrls: ["./correlatividad-list.component.css"]
})
export class CorrelatividadListComponent implements OnInit {
  ci: number;
  materias: Observable<Materia[]>;
  materiasCursadas: Observable<Materia[]>;
  cantMaterias: number;

  constructor(private materiaService: MateriaService) {}

  ngOnInit() {
    this.ci = 12345;
    this.cantMaterias = 0;
    this.reloadData();
  }

  reloadData() {
    this.materias = this.materiaService.getMateriasByCedula(this.ci);
    this.materias.forEach(materia => {
      for (let i = 0; i < materia.length; i++) {
        this.cantMaterias++;
      }
    });
  }
}
