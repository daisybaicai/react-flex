
import React, { useEffect } from 'react';
import echarts from 'echarts';

const GraphForce = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('graph-force'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/les-miserables.gexf', function (xml) {
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.symbolSize = 10;
        node.value = node.symbolSize;
        node.category = node.attributes.modularity_class;
        // Use random x, y
        node.x = node.y = null;
        node.draggable = true;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animation: false,
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                label: {
                    position: 'right'
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };

    myChart.setOption(option);
}, 'xml');

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('graph-force');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="graph-force"></div>;
};

export default GraphForce;
