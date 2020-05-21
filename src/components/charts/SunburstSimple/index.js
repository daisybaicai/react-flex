
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SunburstSimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sunburst-simple'));

    // 指定图表的配置项和数据
    var var data = [{
    name: 'Grandpa',
    children: [{
        name: 'Uncle Leo',
        value: 15,
        children: [{
            name: 'Cousin Jack',
            value: 2
        }, {
            name: 'Cousin Mary',
            value: 5,
            children: [{
                name: 'Jackson',
                value: 2
            }]
        }, {
            name: 'Cousin Ben',
            value: 4
        }]
    }, {
        name: 'Father',
        value: 10,
        children: [{
            name: 'Me',
            value: 5
        }, {
            name: 'Brother Peter',
            value: 1
        }]
    }]
}, {
    name: 'Nancy',
    children: [{
        name: 'Uncle Nike',
        children: [{
            name: 'Cousin Betty',
            value: 1
        }, {
            name: 'Cousin Jenny',
            value: 2
        }]
    }]
}];

option = {
    series: {
        type: 'sunburst',
        // highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    }
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('sunburst-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sunburst-simple"></div>;
};

export default SunburstSimple;
