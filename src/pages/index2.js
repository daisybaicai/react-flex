import styles from './index2.less';
import Moneny from '@/components/mcharts/Money';
import Line from '@/components/mcharts/Line';
import Pie from '@/components/mcharts/Pie';
import ChartsBox from '@/components/ChartsBox';
import { useState } from 'react';
import { List, Button, Modal } from 'antd';
import {chartsData} from './charts';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const Index = props => {
  const [visible, setVisible] = useState(false);

  const clickLoading = () => {
    console.log('click');
  };

  const showModal = () => {
    console.log('mmm');
    setVisible(true);
  };

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };


  return (
    <>
      <div style={{ backgroundColor: 'gray' }}>
        <div className={styles['box0-0']}>
          <div className={styles['box0-0-0']}>
            <div className={styles['box0-0-0-0']}>
              {/* 点击加载xx */}
              {/* <Moneny /> */}
              {/* <ChartsBox /> */}
              <Button onClick={() => showModal()}>more</Button>
            </div>
            <div className={styles['box0-0-0-1']}>
              <Line />
            </div>
          </div>
          <div className={styles['box0-0-1']}>
            <Pie />
          </div>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <List
          grid={{ gutter: 10, column: 4 }}
          dataSource={chartsData}
          pagination={true}
          renderItem={item => (
            <List.Item>
              <ChartsBox name={item.title}/>
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};

export default Index;
