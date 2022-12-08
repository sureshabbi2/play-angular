import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { environment } from '../environments/environment';
const configJson = require('../assets/config.json');
import environmentVariables from './environmentVariables';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ngOnInit(){
    console.log('This environment is', environment);
    console.log('This config is', configJson);
    console.log('environmentVariables', environmentVariables);
  }
  public ngAfterViewInit(): void {
    this.createChartGauge();
    this.createChartGauge2();
    this.createChartGauge3();
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createChartGauge(): void {
    const chart = Highcharts.chart('chart-gauge1', {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%',
      },

      title: {
        text: 'Billable Fresher',
        align: 'center',
        verticalAlign: 'bottom',
      },

      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%',
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 50,
        tickPosition: 'inside',
        tickColor: Highcharts?.defaultOptions?.chart?.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
          step: 10,
          distance: 20,
          style: {
            fontSize: '14px',
          },
        },
        plotBands: [
          {
            from: 0,
            to: 10,
            color: 'red', // red
            thickness: 50,
            label: {
              text: 'Poor',
            },
          },
          {
            from: 11,
            to: 20,
            color: '#FFFFCC', // light-yellow
            thickness: 50,
            label: {
              text: 'Fair',
            },
          },
          {
            from: 21,
            to: 30,
            color: 'yellow', // yellow
            thickness: 50,
            label: {
              text: 'Good',
            },
          },
          {
            from: 31,
            to: 40,
            color: '90EE90', // lightgreen
            thickness: 50,
            label: {
              text: 'Great',
            },
          },
          {
            from: 41,
            to: 50,
            color: 'green', // green
            thickness: 50,
            label: {
              text: 'Excellent',
            },
          },
        ],
      },

      series: [
        {
          name: 'Speed',
          data: [32],
          tooltip: {
            valueSuffix: ' km/h',
          },
          dataLabels: {
            format: '{y} km/h',
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              '#333333',
            style: {
              fontSize: '16px',
            },
          },
          dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 2,
            topWidth: 10,
            baseLength: '0%',
            rearLength: '0%',
          },
          pivot: {
            backgroundColor: 'gray',
            radius: 6,
          },
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 50)); //update the value here, remove setInterval to not update for every 1 second
    }, 1000);
  }

  private createChartGauge2(): void {
    const chart = Highcharts.chart('chart-gauge2', {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%',
      },

      title: {
        text: 'Billable Fresher',
        align: 'center',
        verticalAlign: 'bottom',
      },

      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%',
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 50,
        tickPosition: 'inside',
        tickColor: Highcharts?.defaultOptions?.chart?.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
          step: 10,
          distance: 20,
          style: {
            fontSize: '14px',
          },
        },
        plotBands: [
          {
            from: 0,
            to: 10,
            color: 'red', // red
            thickness: 50,
            label: {
              text: 'Poor',
            },
          },
          {
            from: 11,
            to: 20,
            color: '#FFFFCC', // light-yellow
            thickness: 50,
            label: {
              text: 'Fair',
            },
          },
          {
            from: 21,
            to: 30,
            color: 'yellow', // yellow
            thickness: 50,
            label: {
              text: 'Good',
            },
          },
          {
            from: 31,
            to: 40,
            color: '90EE90', // lightgreen
            thickness: 50,
            label: {
              text: 'Great',
            },
          },
          {
            from: 41,
            to: 50,
            color: 'green', // green
            thickness: 50,
            label: {
              text: 'Excellent',
            },
          },
        ],
      },

      series: [
        {
          name: 'Speed',
          data: [32],
          tooltip: {
            valueSuffix: ' km/h',
          },
          dataLabels: {
            format: '{y} km/h',
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              '#333333',
            style: {
              fontSize: '16px',
            },
          },
          dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 2,
            topWidth: 10,
            baseLength: '0%',
            rearLength: '0%',
          },
          pivot: {
            backgroundColor: 'gray',
            radius: 6,
          },
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 50)); //update the value here, remove setInterval to not update for every 1 second
    }, 1000);
  }

  private createChartGauge3(): void {
    const chart = Highcharts.chart('chart-gauge3', {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%',
      },

      title: {
        text: 'Billable Fresher',
        align: 'center',
        verticalAlign: 'bottom',
      },

      pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%',
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 50,
        tickPosition: 'inside',
        tickColor: Highcharts?.defaultOptions?.chart?.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
          step: 10,
          distance: 20,
          style: {
            fontSize: '14px',
          },
        },
        plotBands: [
          {
            from: 0,
            to: 10,
            color: 'red', // red
            thickness: 50,
            label: {
              text: 'Poor',
            },
          },
          {
            from: 11,
            to: 20,
            color: '#FFFFCC', // light-yellow
            thickness: 50,
            label: {
              text: 'Fair',
            },
          },
          {
            from: 21,
            to: 30,
            color: 'yellow', // yellow
            thickness: 50,
            label: {
              text: 'Good',
            },
          },
          {
            from: 31,
            to: 40,
            color: '90EE90', // lightgreen
            thickness: 50,
            label: {
              text: 'Great',
            },
          },
          {
            from: 41,
            to: 50,
            color: 'green', // green
            thickness: 50,
            label: {
              text: 'Excellent',
            },
          },
        ],
      },

      series: [
        {
          name: 'Speed',
          data: [32],
          tooltip: {
            valueSuffix: ' km/h',
          },
          dataLabels: {
            format: '{y} km/h',
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              '#333333',
            style: {
              fontSize: '16px',
            },
          },
          dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 2,
            topWidth: 10,
            baseLength: '0%',
            rearLength: '0%',
          },
          pivot: {
            backgroundColor: 'gray',
            radius: 6,
          },
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 50)); //update the value here, remove setInterval to not update for every 1 second
    }, 1000);
  }
}

