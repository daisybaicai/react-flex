
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LineInCartesianCoordinateSystem = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-in-cartesian-coordinate-system'));

    // 指定图表的配置项和数据
    var option = {
    xAxis: {},
    yAxis: {},
    series: [{
        data: [[20, 120], [50, 200], [40, 50]],
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
      echarts.disConnect('line-in-cartesian-coordinate-system');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-in-cartesian-coordinate-system"></div>;
};

export default LineInCartesianCoordinateSystem;
