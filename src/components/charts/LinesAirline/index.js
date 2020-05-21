
import React, { useEffect } from 'react';
import echarts from 'echarts';

const LinesAirline = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('lines-airline'));

    // 指定图表的配置项和数据
    var myChart.showLoading();

$.get(ROOT_PATH + 'data/asset/data/flights.json', function(data) {

    myChart.hideLoading();

    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    var routes = data.routes.map(function (airline) {
        return [
            getAirportCoord(airline[1]),
            getAirportCoord(airline[2])
        ];
    });

    myChart.setOption(option = {
        title: {
            text: 'World Flights',
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        backgroundColor: '#003',
        tooltip: {
            formatter: function (param) {
                var route = data.routes[param.dataIndex];
                return data.airports[route[1]][1] + ' > ' + data.airports[route[2]][1];
            }
        },
        geo: {
            map: 'world',
            left: 0,
            right: 0,
            silent: true,
            roam: true,
            itemStyle: {
                borderColor: '#003',
                color: '#005'
            }
        },
        series: [{
            type: 'lines',
            coordinateSystem: 'geo',
            data: routes,
            large: true,
            largeThreshold: 100,
            lineStyle: {
                opacity: 0.05,
                width: 0.5,
                curveness: 0.3
            },
            // 设置混合模式为叠加
            blendMode: 'lighter'
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
      echarts.disConnect('lines-airline');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="lines-airline"></div>;
};

export default LinesAirline;
