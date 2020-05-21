
import React, { useEffect } from 'react';
import echarts from 'echarts';

const GraphForce2 = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('graph-force2'));

    // 指定图表的配置项和数据
    var function createNodes(count) {
    var nodes = [];
    for (var i = 0; i < count; i++) {
        nodes.push({
            id: i
        });
    }
    return nodes;
}

function createEdges(count) {
    var edges = [];
    if (count === 2) {
        return [[0, 1]];
    }
    for (var i = 0; i < count; i++) {
        edges.push([i, (i + 1) % count]);
    }
    return edges;
}

var datas = [];
for (var i = 0; i < 16; i++) {
    datas.push({
        nodes: createNodes(i + 2),
        edges: createEdges(i + 2)
    });
}

option = {
    series: datas.map(function (item, idx) {
        return {
            type: 'graph',
            layout: 'force',
            animation: false,
            data: item.nodes,
            left: (idx % 4) * 25 + '%',
            top: Math.floor(idx / 4) * 25 + '%',
            width: '25%',
            height: '25%',
            force: {
                // initLayout: 'circular'
                // gravity: 0
                repulsion: 60,
                edgeLength: 2
            },
            edges: item.edges.map(function (e) {
                return {
                    source: e[0],
                    target: e[1]
                };
            })
        };
    })
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('graph-force2');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="graph-force2"></div>;
};

export default GraphForce2;
