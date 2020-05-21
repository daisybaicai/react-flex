
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SankeyNodeAlignRight = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sankey-nodeAlign-right'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/energy.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Node Align Left'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        animation: false,
        series: [
            {
                type: 'sankey',
                focusNodeAdjacency: 'allEdges',
                nodeAlign: 'right',
                data: data.nodes,
                links: data.links,
                lineStyle: {
                    color: 'source',
                    curveness: 0.5
                }
            }
        ]
    });
});



    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('sankey-nodeAlign-right');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sankey-nodeAlign-right"></div>;
};

export default SankeyNodeAlignRight;
