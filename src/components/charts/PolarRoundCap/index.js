
import React, { useEffect } from 'react';
import echarts from 'echarts';

const PolarRoundCap = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('polar-roundCap'));

    // 指定图表的配置项和数据
    var option = {
    angleAxis: {
        max: 2,
        startAngle: 30,
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        data: ['v', 'w', 'x', 'y', 'z'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [4, 3, 2, 1, 0],
        coordinateSystem: 'polar',
        name: 'Without Round Cap',
        color: 'rgba(200, 0, 0, 0.5)',
        itemStyle: {
            borderColor: 'red',
            borderWidth: 1
        }
    }, {
        type: 'bar',
        data: [4, 3, 2, 1, 0],
        coordinateSystem: 'polar',
        name: 'With Round Cap',
        roundCap: true,
        color: 'rgba(0, 200, 0, 0.5)',
        itemStyle: {
            borderColor: 'green',
            borderWidth: 1
        }
    }],
    legend: {
        show: true,
        data: ['Without Round Cap', 'With Round Cap']
    }
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('polar-roundCap');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="polar-roundCap"></div>;
};

export default PolarRoundCap;
