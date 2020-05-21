
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LinePolar2 = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-polar2'));

    // 指定图表的配置项和数据
    var var data = [];

for (var i = 0; i <= 360; i++) {
    var t = i / 180 * Math.PI;
    var r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
}

option = {
    title: {
        text: '极坐标双数值轴'
    },
    legend: {
        data: ['line']
    },
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
        min: 0
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
        data: data
    }],
    animationDuration: 2000
};

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('line-polar2');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-polar2"></div>;
};

export default LinePolar2;
