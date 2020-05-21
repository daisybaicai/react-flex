
import React, { useEffect } from 'react';
import echarts from 'echarts';

const GraphWebkitDep = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('graph-webkit-dep'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/webkit-dep.json', function (webkitDep) {
    myChart.hideLoading();

    option = {
        legend: {
            data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
        },
        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                position: 'right',
                formatter: '{b}'
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2
            },
            edges: webkitDep.links
        }]
    };

    myChart.setOption(option);
});

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('graph-webkit-dep');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="graph-webkit-dep"></div>;
};

export default GraphWebkitDep;
