
import React, { useEffect } from 'react';
import echarts from 'echarts';

const ParallelSimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('parallel-simple'));

    // 指定图表的配置项和数据
    var option = {
    parallelAxis: [
        {dim: 0, name: 'Price'},
        {dim: 1, name: 'Net Weight'},
        {dim: 2, name: 'Amount'},
        {
            dim: 3,
            name: 'Score',
            type: 'category',
            data: ['Excellent', 'Good', 'OK', 'Bad']
        }
    ],
    series: {
        type: 'parallel',
        lineStyle: {
            width: 4
        },
        data: [
            [12.99, 100, 82, 'Good'],
            [9.99, 80, 77, 'OK'],
            [20, 120, 60, 'Excellent']
        ]
    }
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('parallel-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="parallel-simple"></div>;
};

export default ParallelSimple;
