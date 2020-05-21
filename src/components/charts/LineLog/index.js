
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LineLog = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-log'));

    // 指定图表的配置项和数据
    var option = {
    title: {
        text: '对数轴示例',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
        left: 'left',
        data: ['2的指数', '3的指数']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y',
        minorTick: {
            show: true
        },
        minorSplitLine: {
            show: true
        }
    },
    series: [
        {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        },
        {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        },
        {
            name: '1/2的指数',
            type: 'line',
            data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
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
      echarts.disConnect('line-log');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-log"></div>;
};

export default LineLog;
