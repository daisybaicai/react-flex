
import React, { useEffect } from 'react';
import echarts from 'echarts';

const BarPolarStackRadial = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('bar-polar-stack-radial'));

    // 指定图表的配置项和数据
    var option = {
    angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('bar-polar-stack-radial');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="bar-polar-stack-radial"></div>;
};

export default BarPolarStackRadial;
