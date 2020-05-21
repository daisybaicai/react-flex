
import React, { useEffect } from 'react';
import echarts from 'echarts';

const DatasetSimple0 = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('dataset-simple0'));

    // 指定图表的配置项和数据
    var option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('dataset-simple0');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="dataset-simple0"></div>;
};

export default DatasetSimple0;
