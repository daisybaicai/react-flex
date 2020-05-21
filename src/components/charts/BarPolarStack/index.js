
import React, { useEffect } from 'react';
import echarts from 'echarts';

const BarPolarStack = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('bar-polar-stack'));

    // 指定图表的配置项和数据
    var option = {
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
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
      echarts.disConnect('bar-polar-stack');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="bar-polar-stack"></div>;
};

export default BarPolarStack;
