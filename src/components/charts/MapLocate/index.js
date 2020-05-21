
import React, { useEffect } from 'react';
import echarts from 'echarts';

const MapLocate = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('map-locate'));

    // 指定图表的配置项和数据
    var var locations = [{
    name: '上海',
    coord: [121.472644, 31.231706]
}, {
    name: '北京',
    coord: [116.405285, 39.904989]
}, {
    name: '广东',
    coord: [113.280637, 23.839463714285714]
}];
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode : 'multiple',
            label: {
                show: true
            }
        }
    ]
};

var currentLoc = 0;
setInterval(function () {
    myChart.setOption({
        series: [{
            center: locations[currentLoc].coord,
            zoom: 4,
            data: [
                {
                    name: locations[currentLoc].name,
                    selected: true
                }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut'
        }]
    });
    currentLoc = (currentLoc + 1) % locations.length;
}, 2000);

    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('map-locate');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="map-locate"></div>;
};

export default MapLocate;
