import { Component, OnInit } from "@angular/core";
import { Extension } from "../model/extension";
import { Observable } from "rxjs";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import { ExtensionService } from "../services/extension.service";

@Component({
  selector: "app-extension-dona",
  templateUrl: "./extension-dona.component.html",
  styleUrls: ["./extension-dona.component.css"]
})
export class ExtensionDonaComponent implements OnInit {
  // Pie
  ci: number;
  extensiones: Observable<Extension[]>;
  porcentaje: number;
  total: number;
  faltante: number;
  dato: Observable<Number[]>;

  constructor(private extensionService: ExtensionService) {}

  ngOnInit() {
    this.ci = 12345;
    this.porcentaje = 0;
    this.total = 90;
    this.faltante = 0;
    this.reloadData();
  }

  reloadData() {
    this.extensiones = this.extensionService.getExtensionesByCedula(this.ci);
    this.extensiones.forEach(extension => {
      for(let i = 0; i < extension.length; i++ ) {
        console.log('hora:', extension[i].horas);
        this.porcentaje = this.porcentaje + extension[i].horas
      }
      console.log('Horas acumuladas:', this.porcentaje);
      this.faltante = this.total = 90 - this.porcentaje;
      console.log('Horas faltantes:', this.faltante);
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
  //public pieChartData: number = [this.porcentaje, this.faltante];
  //public pieChartData: SingleDataSet = [this.porcentaje, this.faltante];
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
    this.pieChartLabels.push('Horas faltantes');
    this.pieChartData.push(this.faltante);
    this.pieChartColors[0].backgroundColor.push('rgba(0,0,255,0.3)');
    this.pieChartLabels.push('Horas concretadas');
    this.pieChartData.push(this.porcentaje);
    this.pieChartColors[0].backgroundColor.push('rgba(0,255,0,0.3)');
  }
}
