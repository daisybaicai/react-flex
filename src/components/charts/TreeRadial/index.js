
import React, { useEffect } from 'react';
import echarts from 'echarts';

const TreeRadial = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('tree-radial'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/flare.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '18%',
                bottom: '14%',

                layout: 'radial',

                symbol: 'emptyCircle',

                symbolSize: 7,

                initialTreeDepth: 3,

                animationDurationUpdate: 750

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
      echarts.disConnect('tree-radial');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="tree-radial"></div>;
};

export default TreeRadial;
