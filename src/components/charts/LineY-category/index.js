
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LineY-category = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('line-y-category'));

    // 指定图表的配置项和数据
    var option = {
    legend: {
        data: ['高度(km)与气温(°C)变化关系']
    },
    tooltip: {
        trigger: 'axis',
        formatter: 'Temperature : <br/>{b}km : {c}°C'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value} km'
        },
        boundaryGap: false,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    series: [
        {
            name: '高度(km)与气温(°C)变化关系',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
        }
    ]
};

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('line-y-category');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="line-y-category"></div>;
};

export default LineY-category;
