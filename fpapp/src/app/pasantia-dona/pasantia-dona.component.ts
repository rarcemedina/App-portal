import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import { PasantiaService } from "../services/pasantia.service";
import { Pasantia } from "../model/pasantia";

@Component({
  selector: "app-pasantia-dona",
  templateUrl: "./pasantia-dona.component.html",
  styleUrls: ["./pasantia-dona.component.css"]
})
export class PasantiaDonaComponent implements OnInit {
  ci: number;
  pasantias: Observable<Pasantia[]>;
  pasantiasHechas: Observable<Pasantia[]>;
  totalDoc: number;
  cantDoc: number;
  faltaDoc: number;

  constructor(private pasantiaService: PasantiaService) {}

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
      this.actualizarPie();
    });
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  public pieChartLabels: Label[] = [];
  pieChartData: number[] = [];
  pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: []
    }
  ];

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public actualizarPie() {
    this.pieChartLabels.push("Docs faltantes");
    this.pieChartData.push(this.faltaDoc);
    this.pieChartColors[0].backgroundColor.push("rgba(0,0,255,0.3)");
    this.pieChartLabels.push("Docs presentados");
    this.pieChartData.push(this.cantDoc);
    this.pieChartColors[0].backgroundColor.push("rgba(255,0,0,0.3)");
  }
}
