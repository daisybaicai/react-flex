
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SankeySimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sankey-simple'));

    // 指定图表的配置项和数据
    var option = {
    series: {
        type: 'sankey',
        layout: 'none',
        focusNodeAdjacency: 'allEdges',
        data: [{
            name: 'a'
        }, {
            name: 'b'
        }, {
            name: 'a1'
        }, {
            name: 'a2'
        }, {
            name: 'b1'
        }, {
            name: 'c'
        }],
        links: [{
            source: 'a',
            target: 'a1',
            value: 5
        }, {
            source: 'a',
            target: 'a2',
            value: 3
        }, {
            source: 'b',
            target: 'b1',
            value: 8
        }, {
            source: 'a',
            target: 'b1',
            value: 3
        }, {
            source: 'b1',
            target: 'a1',
            value: 1
        }, {
            source: 'b1',
            target: 'c',
            value: 2
        }]
    }
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('sankey-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sankey-simple"></div>;
};

export default SankeySimple;
