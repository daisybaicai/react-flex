import React, { useEffect } from 'react';
import echarts from 'echarts';

const Line = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line'));

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
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
  };
  

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('line');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line"></div>;
};

export default Line;
