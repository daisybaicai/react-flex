
import React, { useEffect } from 'react';
import echarts from 'echarts';

const ScatterSimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('scatter-simple'));

    // 指定图表的配置项和数据
    var option = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter'
    }]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('scatter-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="scatter-simple"></div>;
};

export default ScatterSimple;
