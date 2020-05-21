
import React, { useEffect } from 'react';
import echarts from 'echarts';

const ScatterLarge = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('scatter-large'));

    // 指定图表的配置项和数据
    var function genData(len, offset) {
    var lngRange = [-10.781327, 131.48];
    var latRange = [18.252847, 52.33];

    var arr = new Float32Array(len * 2);
    var off = 0;

    for (var i = 0; i < len; i++) {
        var x = +Math.random() * 10;
        var y = +Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random() + (offset || 0) / 10;
        arr[off++] = x;
        arr[off++] = y;
    }
    return arr;
}

var data1 = genData(5e5);
var data2 = genData(5e5, 10);

option = {
    title: {
        text: echarts.format.addCommas(data1.length / 2 + data2.length / 2) + ' Points'
    },
    tooltip: {},
    toolbox: {
        left: 'center',
        feature: {
            dataZoom: {}
        }
    },
    legend: {
        orient: 'vertical',
        right: 10
    },
    xAxis: [{
    }],
    yAxis: [{
    }],
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider'
    }],
    animation: false,
    series: [{
        name: 'A',
        type: 'scatter',
        data: data1,
        dimensions: ['x', 'y'],
        symbolSize: 3,
        itemStyle: {
            opacity: 0.4
        },
        large: true
    }, {
        name: 'B',
        type: 'scatter',
        data: data2,
        dimensions: ['x', 'y'],
        symbolSize: 3,
        itemStyle: {
            opacity: 0.4
        },
        large: true
    }]
};



    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('scatter-large');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="scatter-large"></div>;
};

export default ScatterLarge;
