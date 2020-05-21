import React, { useEffect } from 'react';
import echarts from 'echarts';

const MoneyMounthChart = () => {

  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    myChart.setOption(option);
  }
  

  useEffect(() => {

    setTimeout(() => {
        renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('main');
    }
  }, []);
  
  return (
    <div style={{width: '400px', height: '400px'}} id="main"></div>
  )
}

export default MoneyMounthChart;