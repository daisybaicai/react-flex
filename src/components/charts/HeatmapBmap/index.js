
import React, { useEffect } from 'react';
import echarts from 'echarts';

const HeatmapBmap = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('heatmap-bmap'));

    // 指定图表的配置项和数据
    var $.get(ROOT_PATH + 'data/asset/data/hangzhou-tracks.json', function (data) {

    var points = [].concat.apply([], data.map(function (track) {
        return track.map(function (seg) {
            return seg.coord.concat([1]);
        });
    }));
    myChart.setOption(option = {
        animation: false,
        bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    });
    // 添加百度地图插件
    var bmap = myChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl());
});


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('heatmap-bmap');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="heatmap-bmap"></div>;
};

export default HeatmapBmap;
