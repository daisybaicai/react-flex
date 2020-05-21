
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LineFunction = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-function'));

    // 指定图表的配置项和数据
    var function func(x) {
    x /= 10;
    return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
}

function generateData() {
    let data = [];
    for (let i = -200; i <= 200; i += 0.1) {
        data.push([i, func(i)]);
    }
    return data;
}

option = {
    animation: false,
    grid: {
        top: 40,
        left: 50,
        right: 40,
        bottom: 50
    },
    xAxis: {
        name: 'x',
        minorTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                color: '#999'
            }
        },
        minorSplitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    yAxis: {
        name: 'y',
        min: -100,
        max: 100,
        minorTick: {
            show: true
        },
        splitLine: {
            lineStyle: {
                color: '#999'
            }
        },
        minorSplitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    dataZoom: [{
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: -20,
        endValue: 20
    }, {
        show: true,
        type: 'inside',
        filterMode: 'none',
        yAxisIndex: [0],
        startValue: -20,
        endValue: 20
    }],
    series: [
        {
            type: 'line',
            showSymbol: false,
            clip: true,
            data: generateData()
        }
    ]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('line-function');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-function"></div>;
};

export default LineFunction;
