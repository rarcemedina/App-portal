import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Materia } from '../model/materia';
import { MateriaService } from '../services/materia.service';

@Component({
  selector: 'app-materia-dona',
  templateUrl: './materia-dona.component.html',
  styleUrls: ['./materia-dona.component.css']
})
export class MateriaDonaComponent implements OnInit {
  ci: number;
  materias: Observable<Materia[]>;
  materiasCursadas: Observable<Materia[]>;
  totalNotas: number;
  cantNotas: number;
  cantMaterias: number;
  promedio: number;
  faltantes: number;
  cursadas: number;

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.ci = 12345;
    this.totalNotas = 0;
    this.cantNotas = 0;
    this.cantMaterias = 40;
    this.promedio = 0;
    this.faltantes = 0;
    this.cursadas = 0;
    this.reloadData();
  }

  reloadData() {
    this.materias = this.materiaService.getMateriasByCedula(this.ci);
    this.materias.forEach(materia => {
      for (let i = 0; i < materia.length; i++) {
        console.log("Materia:", materia[i].materia);
        if (materia[i].nota > 1) {
          this.totalNotas +=  materia[i].nota;
          //this.materiasCursadas[i] = materia[i];
          this.cantNotas++;
        }
      }
      console.log("Notas acumuladas:", this.totalNotas);
      this.promedio = this.totalNotas / this.cantNotas;
      console.log("Promedio de notas:", this.promedio);
      this.faltantes = this.cantMaterias - this.cantNotas;
      this.actualizarPie()
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
    this.pieChartLabels.push('Materias faltantes');
    this.pieChartData.push(this.faltantes);
    this.pieChartColors[0].backgroundColor.push('rgba(0,0,255,0.3)');
    this.pieChartLabels.push('Materias cursadas');
    this.pieChartData.push(this.cantNotas);
    this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  }
}
