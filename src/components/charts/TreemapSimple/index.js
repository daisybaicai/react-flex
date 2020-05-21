
import React, { useEffect } from 'react';
import echarts from 'echarts';

const TreemapSimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('treemap-simple'));

    // 指定图表的配置项和数据
    var option = {
    series: [{
        type: 'treemap',
        data: [{
            name: 'nodeA',            // First tree
            value: 10,
            children: [{
                name: 'nodeAa',       // First leaf of first tree
                value: 4
            }, {
                name: 'nodeAb',       // Second leaf of first tree
                value: 6
            }]
        }, {
            name: 'nodeB',            // Second tree
            value: 20,
            children: [{
                name: 'nodeBa',       // Son of first tree
                value: 20,
                children: [{
                    name: 'nodeBa1',  // Granson of first tree
                    value: 20
                }]
            }]
        }]
    }]
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('treemap-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="treemap-simple"></div>;
};

export default TreemapSimple;
