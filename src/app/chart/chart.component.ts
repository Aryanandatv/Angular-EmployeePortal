import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  Highcharts:any=Highcharts

  ChartOptions:any={
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Employee Performance'
    },
    tooltip: {
        valueSuffix: '%'
    },
     plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
              distance: 20
          }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7 },
                  filter: {
                      operator: '>',
                      property: 'percentage',
                      value: 10
                  }
              }]
          }
      },
      series: [
          {
              name: 'Percentage',
              colorByPoint: true,
              data: [
                  {
                      name: 'HR',
                      y: 55.02
                  }, {
                    name: 'IT',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Accounts',
                    y: 1.09
                },
                {
                    name: 'Tester',
                    y: 15.5
                },
                {  name: 'Technical',
                  y: 1.68
              }
          ]
      }
  ]
}




}
