import { Tree, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDva } from '../../hooks/useDva';
import { itemUpdateInfo } from '../../utils/utils';

const EditTree = props => {
  const {
    dispatch,
    data: {
      settings: { currentView },
    },
  } = useDva({}, ['settings']);
  const [value, setValue] = useState();

  const onChange = (value, key) => {
    if (value) {
      const index = key.slice(2);
      const data = itemUpdateInfo(index, currentView, { className: value });
      dispatch({
        type: 'settings/changeView',
        payload: data,
      });
    }
  };

  /**
   * @description 渲染树节点
   * @param {*} data 数据
   * @param {*} parent 父亲的index
   */
  const renderTree = (data, parent) => {
    let current = [];
    data.map((item, i) => {
      const indexs = `${parent}-${i}`;
      const { children = [], className = '' } = item;
      const titleText = className ? className : `box${indexs}`;
      const title = titleRender(indexs, titleText);
      if (children.length > 0) {
        const childrenRes = renderTree(children, indexs);
        const obj = {
          title,
          key: indexs,
          children: childrenRes,
        };
        current.push(obj);
      } else {
        const childrenOjb = {
          title,
          key: indexs,
        };
        current.push(childrenOjb);
      }
    });
    return current;
  };

  /**
   * @description 渲染每一个title节点
   * @param {*} key 
   * @param {*} title 
   */
  const titleRender = (key, title) => {
    return (
      <>
        <Input
          defaultValue={title}
          value={value}
          onChange={e => onChange(e.target.value, key)}
          placeholder="value"
          style={{ width: 100 }}
        />
      </>
    );
  };

  return (
    <>
      {currentView.length > 0 ? (
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={['0-0-0']}
          treeData={renderTree(currentView, '0')}
        />
      ) : null}
    </>
  );
};

export default EditTree;
