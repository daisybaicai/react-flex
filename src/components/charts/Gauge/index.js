
import React, { useEffect } from 'react';
import echarts from 'echarts';

const Gauge = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('gauge'));

    // 指定图表的配置项和数据
    var option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: '{value}%'},
            data: [{value: 50, name: '完成率'}]
        }
    ]
};

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('gauge');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="gauge"></div>;
};

export default Gauge;
