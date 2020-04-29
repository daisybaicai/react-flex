import React, {useState} from 'react';
import styles from './box.less';
import { useDva } from '../../hooks/useDva';
import { itemUpdateInfo, itemRemove } from '../../utils/utils';
import { Input } from 'antd';


const box = props => {
  const { index, info = { flex } } = props;

  const [value, setValue] = useState();

  const {
    dispatch,
    data: {
      settings: { selectIndex, currentView },
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

  const viewData = {
    flexDirection: 'row',
    children: [
      {
        flex: 1,
      },
      {
        flex: 1,
      },
    ],
  };

  const downData = {
    flexDirection: 'column',
    children: [
      {
        flex: 1,
      },
      {
        flex: 1,
      },
    ],
  };

  const changeView = (type, index) => {
    if (type === 'right') {
      const data = itemUpdateInfo(index, currentView, viewData);
      dispatch({
        type: 'settings/changeView',
        payload: data,
      });
    }
    if (type === 'down') {
      const data = itemUpdateInfo(index, currentView, downData);
      dispatch({
        type: 'settings/changeView',
        payload: data,
      });
    }
    if(type === 'delete') {
      const data = itemRemove(index, currentView);
      dispatch({
        type: 'settings/changeView',
        payload: data,
      });
    }
  };


  const onChange = value => {
    if(value) {
      const data = itemUpdateInfo(index, currentView, {flex: value});
      dispatch({
        type: 'settings/changeView',
        payload: data,
      });
    }
  };

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
        <span>
          <Input
            defaultValue={info.flex}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="value"
            style={{ width: 60 }}
          />
        </span>
        <span onClick={() => changeView('delete', index)}>delete</span>
      </div>
    </div>
  );
};

export default box;
