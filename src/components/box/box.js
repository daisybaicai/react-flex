import React from 'react';
import styles from './box.less';
import { useDva } from '../../hooks/useDva';

const box = props => {
  const { index } = props;
  const {
    dispatch,
    data: {
      settings: { selectIndex },
    },
  } = useDva({}, ['settings']);

  const isSelect = selectIndex === index;

  const selectConatiner = e => {
    const index = e.target.dataset.id;
    if (index) {
      dispatch({
        type: 'settings/changeIndex',
        payload: index,
      });
    }
  };

  const changeView = (type, index) => {
    console.log('change', type, index);
    // right 用之前的复制的效果
    if(type === 'right') {
        console.log('right----');
        
    }

  }

  return (
    <div
      className={styles.container}
      data-id={index}
      onClick={e => selectConatiner(e)}
      style={{ borderColor: isSelect ? 'blue' : '' }}
    >
      容器
      <div
        className={styles.actionTabs}
        style={{ display: isSelect ? '' : 'none' }}
      >
        <span onClick={() => changeView('right', index)}>right</span>
        <span onClick={() => changeView('down', index)}>down</span>
        <span>number</span>
      </div>
      {/* <div className={styles.actionRight}>
                +
            </div>
            <div className={styles.actionBottom}>
                +
            </div> */}
    </div>
  );
};

export default box;
