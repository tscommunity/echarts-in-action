import { Component, ElementRef, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalBarComponent implements OnInit, OnDestroy {

  options: echarts.EChartOption = {
    title: {
      text: 'World wide population',
      subtext: 'Data from network'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          readOnly: true
        },
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}<br /> {c}GB / {c}%'
    },
    grid: {
      //height:200,
      left: 10,
      right: 110,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'population',
      position: 'top',
      boundaryGap: [0, 0.01],
      //min:5000,
      max: 800000
    },
    yAxis: {
      type: 'category',
      name: 'Nation                             ',
      nameLocation: 'end',
      data: ['Brazil', 'Indonesia',
        'United State of America', 'India',
        'People Republic of China', 'World Wide']
    },
    series: [
      {
        name: 'year 2011',
        type: 'bar',
        barWidth: 16,
        barCategoryGap: "10%",
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(110, 193, 244, 0.2)',
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}'
        },
        markLine: {
          data: [{ type: "average" }, { type: "max" }],
          silent: false,
          label: {
            position: "insideEndTop"
          }
        },
        itemStyle: {
          // @ts-ignore
          normal: {
            color: function (params: { dataIndex: number }) {
              // build a color map as your need.
              var colorList = [
                '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
              ];
              return colorList[params.dataIndex]
            }
          }
        }
      }
    ]
  };

  chart!: echarts.ECharts;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.chart = echarts.init(this.elementRef.nativeElement);
    this.chart.setOption(this.options, true);
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.clear();
      this.chart.dispose();
    }
  }
}
