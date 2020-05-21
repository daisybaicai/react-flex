
import React, { useEffect } from 'react';
import echarts from 'echarts';

const BarBackground = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('bar-background'));

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
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
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
      echarts.disConnect('bar-background');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="bar-background"></div>;
};

export default BarBackground;
