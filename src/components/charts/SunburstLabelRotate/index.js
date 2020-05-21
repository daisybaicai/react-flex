
import React, { useEffect } from 'react';
import echarts from 'echarts';

const SunburstLabelRotate = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('sunburst-label-rotate'));

    // 指定图表的配置项和数据
    var option = {
    silent: true,
    series: {
        radius: ['15%', '80%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: [{
            value: 8,
            children: [{
                value: 4,
                children: [{
                    value: 2
                }, {
                    value: 1
                }, {
                    value: 1
                }, {
                    value: 0.5
                }]
            }, {
                value: 2
            }]
        }, {
            value: 4,
            children: [{
                children: [{
                    value: 2
                }]
            }]
        }, {
            value: 4,
            children: [{
                children: [{
                    value: 2
                }]
            }]
        }, {
            value: 3,
            children: [{
                children: [{
                    value: 1
                }]
            }]
        }],
        label: {
            color: '#fff',
            textBorderColor: '#666',
            textBorderWidth: 2,
            borderColor: '#999',
            borderWidth: 1,
            formatter: function (param) {
                var depth = param.treePathInfo.length;
                if (depth === 2) {
                    return 'radial';
                }
                else if (depth === 3) {
                    return 'tangential';
                }
                else if (depth === 4) {
                    return '0';
                }
            }
        },
        levels: [{}, {
            itemStyle: {
                color: 'red'
            },
            label: {
                rotate: 'radial'
            }
        }, {
            itemStyle: {
                color: 'orange'
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            itemStyle: {
                color: 'yellow'
            },
            label: {
                rotate: 0
            }
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
      echarts.disConnect('sunburst-label-rotate');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="sunburst-label-rotate"></div>;
};

export default SunburstLabelRotate;
