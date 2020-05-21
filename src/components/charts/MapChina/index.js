
import React, { useEffect } from 'react';
import echarts from 'echarts';

const MapChina = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('map-china'));

    // 指定图表的配置项和数据
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            label: {
                show: true
            },
            data: [
                {name: '广东', selected: true}
            ]
        }
    ]
};

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('map-china');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="map-china"></div>;
};

export default MapChina;
