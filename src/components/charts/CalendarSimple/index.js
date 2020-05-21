
import React, { useEffect } from 'react';
import echarts from 'echarts';

const CalendarSimple = () => {
  const renderChart = () => {
    var myChart = echarts.init(document.getElementById('calendar-simple'));

    // 指定图表的配置项和数据
    var function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(year + '-12-31');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

option = {
    visualMap: {
        show: false,
        min: 0,
        max: 10000
    },
    calendar: {
        range: '2017'
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData(2017)
    }
};


    myChart.setOption(option);
  };

  useEffect(() => {
    setTimeout(() => {
      renderChart();
    }, 1000);

    return () => {
      echarts.disConnect('calendar-simple');
    };
  }, []);

  return <div style={{ width: '400px', height: '400px' }} id="calendar-simple"></div>;
};

export default CalendarSimple;
