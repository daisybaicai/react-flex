
import React, { useEffect } from 'react';
import echarts from 'echarts';

const AreaBasic = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('area-basic'));

    // 指定图表的配置项和数据
    var option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('area-basic');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="area-basic"></div>;
};

export default AreaBasic;
