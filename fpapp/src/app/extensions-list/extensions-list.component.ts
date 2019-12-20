import { Component, OnInit, Input } from "@angular/core";
import { Extension } from "../model/extension";
import { Observable } from "rxjs";
import { ExtensionService } from "../services/extension.service";

@Component({
  selector: "app-extensions-list",
  templateUrl: "./extensions-list.component.html",
  styleUrls: ["./extensions-list.component.css"]
})
export class ExtensionsListComponent implements OnInit {
  ci: number;
  extensiones: Observable<Extension[]>;
  porcentaje: number;
  total: number;
  faltante: number;
  //extensiones: Extension[];

  constructor(private extensionService: ExtensionService) {}
  //constructor(private dataService: ExtensionService) { }

  ngOnInit() {
    this.ci = 12345;
    this.porcentaje = 0;
    this.total = 90;
    this.faltante = 0;
    this.reloadData();
  }

  reloadData() {
    //this.extensiones = this.extensionService.getExtensionesList();
    //this.dataService.getExtensionesByCedula(this.ci).subscribe(extensiones => this.extensiones = extensiones);
    this.extensiones = this.extensionService.getExtensionesByCedula(this.ci);
    this.extensiones.forEach(extension => {
      for (let i = 0; i < extension.length; i++) {
        console.log("hora:", extension[i].horas);
        this.porcentaje = this.porcentaje + extension[i].horas;
      }
      console.log("Horas acumuladas:", this.porcentaje);
      this.faltante = this.total = 90 - this.porcentaje;
      console.log("Horas faltantes:", this.faltante);
    });
  }
}
