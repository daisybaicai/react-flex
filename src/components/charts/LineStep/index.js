
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LineStep = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-step'));

    // 指定图表的配置项和数据
    var option = {
    title: {
        text: 'Step Line'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Step Start', 'Step Middle', 'Step End']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
        },
        {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
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
      echarts.disConnect('line-step');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-step"></div>;
};

export default LineStep;
