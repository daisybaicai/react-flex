
import React, { useEffect } from 'react';
import echarts from 'echarts';

const TreeBasic = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('tree-basic'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/flare.json', function (data) {
    myChart.hideLoading();

    echarts.util.each(data.children, function (datum, index) {
        index % 2 === 0 && (datum.collapsed = true);
    });

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
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
      echarts.disConnect('tree-basic');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="tree-basic"></div>;
};

export default TreeBasic;
