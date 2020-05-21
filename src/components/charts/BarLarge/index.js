
import React, { useEffect } from 'react';
import echarts from 'echarts';

const BarLarge = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('bar-large'));

    // 指定图表的配置项和数据
    var 
var dataCount = 5e5;
var data = generateData(dataCount);

var option = {
    title: {
        text: echarts.format.addCommas(dataCount) + ' Data',
        left: 10
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        bottom: 90
    },
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider'
    }],
    xAxis: {
        data: data.categoryData,
        silent: false,
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    yAxis: {
        splitArea: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        data: data.valueData,
        // Set `large` for large data amount
        large: true
    }]
};

function generateData(count) {
    var baseValue = Math.random() * 1000;
    var time = +new Date(2011, 0, 1);
    var smallBaseValue;

    function next(idx) {
        smallBaseValue = idx % 30 === 0
            ? Math.random() * 700
            : (smallBaseValue + Math.random() * 500 - 250);
        baseValue += Math.random() * 20 - 10;
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
        );
    }

    var categoryData = [];
    var valueData = [];

    for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
        valueData.push(next(i).toFixed(2));
        time += 1000;
    }

    return {
        categoryData: categoryData,
        valueData: valueData
    };
}


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('bar-large');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="bar-large"></div>;
};

export default BarLarge;
