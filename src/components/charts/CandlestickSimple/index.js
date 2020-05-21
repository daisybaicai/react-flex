
import React, { useEffect } from 'react';
import echarts from 'echarts';

const CandlestickSimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('candlestick-simple'));

    // 指定图表的配置项和数据
    var option = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [{
        type: 'k',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ]
    }]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('candlestick-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="candlestick-simple"></div>;
};

export default CandlestickSimple;
