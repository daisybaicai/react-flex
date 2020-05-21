
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LineStyle = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-style'));

    // 指定图表的配置项和数据
    var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
            color: 'green',
            width: 4,
            type: 'dashed'
        },
        itemStyle: {
            borderWidth: 3,
            borderColor: 'yellow',
            color: 'blue'
        }
    }]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('line-style');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-style"></div>;
};

export default LineStyle;
