
import React, { useEffect } from 'react';
import echarts from 'echarts';

const BarNegative2 = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('bar-negative2'));

    // 指定图表的配置项和数据
    var var labelRight = {
    position: 'right'
};
option = {
    title: {
        text: '交错正负轴标签',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'top',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
        data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                formatter: '{b}'
            },
            data: [
                {value: -0.07, label: labelRight},
                {value: -0.09, label: labelRight},
                0.2, 0.44,
                {value: -0.23, label: labelRight},
                0.08,
                {value: -0.17, label: labelRight},
                0.47,
                {value: -0.36, label: labelRight},
                0.18
            ]
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
      echarts.disConnect('bar-negative2');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="bar-negative2"></div>;
};

export default BarNegative2;
