
import React, { useEffect } from 'react';
import echarts from 'echarts';

const TreeVertical = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('tree-vertical'));

    // 指定图表的配置项和数据
    var myChart.showLoading();
$.get(ROOT_PATH + 'data/asset/data/flare.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series:[
            {
                type: 'tree',

                data: [data],

                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '20%',

                symbol: 'emptyCircle',

                orient: 'vertical',

                expandAndCollapse: true,

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

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
      echarts.disConnect('tree-vertical');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="tree-vertical"></div>;
};

export default TreeVertical;
