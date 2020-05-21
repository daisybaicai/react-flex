
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SankeyNodeAlignLeft = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sankey-nodeAlign-left'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/energy.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Node Align Right'
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
                nodeAlign: 'left',
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
      echarts.disConnect('sankey-nodeAlign-left');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sankey-nodeAlign-left"></div>;
};

export default SankeyNodeAlignLeft;
