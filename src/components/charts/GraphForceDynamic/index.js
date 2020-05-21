
import React, { useEffect } from 'react';
import echarts from 'echarts';

const GraphForceDynamic = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('graph-force-dynamic'));

    // 指定图表的配置项和数据
    var 
var data = [{
    fixed: true,
    x: myChart.getWidth() / 2,
    y: myChart.getHeight() / 2,
    symbolSize: 20,
    id: '-1'
}];

var edges = [];

option = {
    series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        data: data,
        force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 100,
            edgeLength: 5
        },
        edges: edges
    }]
};

setInterval(function () {
    data.push({
        id: data.length
    });
    var source = Math.round((data.length - 1) * Math.random());
    var target = Math.round((data.length - 1) * Math.random());
    if (source !== target) {
        edges.push({
            source: source,
            target: target
        });
    }
    myChart.setOption({
        series: [{
            roam: true,
            data: data,
            edges: edges
        }]
    });

    // console.log('nodes: ' + data.length);
    // console.log('links: ' + data.length);
}, 500);

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('graph-force-dynamic');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="graph-force-dynamic"></div>;
};

export default GraphForceDynamic;
