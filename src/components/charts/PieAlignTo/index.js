
import React, { useEffect } from 'react';
import echarts from 'echarts';

const PieAlignTo = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('pie-alignTo'));

    // 指定图表的配置项和数据
    var var data = [{
    name: 'Apples',
    value: 70
}, {
    name: 'Strawberries',
    value: 68
}, {
    name: 'Bananas',
    value: 48
}, {
    name: 'Oranges',
    value: 40
}, {
    name: 'Pears',
    value: 32
}, {
    name: 'Pineapples',
    value: 27
}, {
    name: 'Grapes',
    value: 18
}];

option = {
    title: [{
        text: 'Pie label alignTo'
    }, {
        subtext: 'alignTo: "none" (default)',
        left: '16.67%',
        top: '75%',
        textAlign: 'center'
    }, {
        subtext: 'alignTo: "labelLine"',
        left: '50%',
        top: '75%',
        textAlign: 'center'
    }, {
        subtext: 'alignTo: "edge"',
        left: '83.33%',
        top: '75%',
        textAlign: 'center'
    }],
    series: [{
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
        },
        left: 0,
        right: '66.6667%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5
        },
        left: '33.3333%',
        right: '33.3333%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        animation: false,
        label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20
        },
        left: '66.6667%',
        right: 0,
        top: 0,
        bottom: 0
    }]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('pie-alignTo');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="pie-alignTo"></div>;
};

export default PieAlignTo;
