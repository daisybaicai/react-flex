
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SankeyLevels = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sankey-levels'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/product.json', function (data) {
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
                focusNodeAdjacency: true,
                levels: [{
                    depth: 0,
                    itemStyle: {
                        color: '#fbb4ae'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 1,
                    itemStyle: {
                        color: '#b3cde3'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 2,
                    itemStyle: {
                        color: '#ccebc5'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }, {
                    depth: 3,
                    itemStyle: {
                        color: '#decbe4'
                    },
                    lineStyle: {
                        color: 'source',
                        opacity: 0.6
                    }
                }],
                lineStyle: {
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
      echarts.disConnect('sankey-levels');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sankey-levels"></div>;
};

export default SankeyLevels;
