
import React, { useEffect } from 'react';
import echarts from 'echarts';

const TreemapDrillDown = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('treemap-drill-down'));

    // 指定图表的配置项和数据
    var var uploadedDataURL = ROOT_PATH + 'data/asset/data/ec-option-doc-statistics-201604.json';

myChart.showLoading();

$.getJSON(uploadedDataURL, function (rawData) {

    myChart.hideLoading();

    function convert(source, target, basePath) {
        for (var key in source) {
            var path = basePath ? (basePath + '.' + key) : key;
            if (!key.match(/^\$/)) {
                target.children = target.children || [];
                var child = {
                    name: path
                };
                target.children.push(child);
                convert(source[key], child, path);
            }
        }

        if (!target.children) {
            target.value = source.$count || 1;
        }
        else {
            target.children.push({
                name: basePath,
                value: source.$count
            });
        }
    }

    var data = [];

    convert(rawData, data, '');

    myChart.setOption(option = {
        title: {
            text: 'ECharts 配置项查询分布',
            subtext: '2016/04',
            left: 'leafDepth'
        },
        tooltip: {},
        series: [{
            name: 'option',
            type: 'treemap',
            visibleMin: 300,
            data: data.children,
            leafDepth: 2,
            levels: [
                {
                    itemStyle: {
                        borderColor: '#555',
                        borderWidth: 4,
                        gapWidth: 4
                    }
                },
                {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        borderColorSaturation: 0.7,
                        gapWidth: 2,
                        borderWidth: 2
                    }
                },
                {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        borderColorSaturation: 0.6,
                        gapWidth: 1
                    }
                },
                {
                    colorSaturation: [0.3, 0.5]
                }
            ]
        }]
    });
});

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('treemap-drill-down');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="treemap-drill-down"></div>;
};

export default TreemapDrillDown;
