
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SankeyEnergy = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sankey-energy'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/energy.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                focusNodeAdjacency: 'allEdges',
                itemStyle: {
                    borderWidth: 1,
                    borderColor: '#aaa'
                },
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
      echarts.disConnect('sankey-energy');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sankey-energy"></div>;
};

export default SankeyEnergy;
