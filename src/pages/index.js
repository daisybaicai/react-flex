import Box from '@/components/box/box';
import CodeView from '@/components/codeView/code';
import { useDva } from '../hooks/useDva';
import { useEffect, useState } from 'react';
import EditTree from '@/components/EditableTree/EditableTree';
import { renderCss, renderJSX } from '../utils/utils';
import axios from 'axios';
import { history } from 'umi';
import { Modal, Col } from 'antd';
import ThemeCard from '@/components/ThemeCard';

// 测试data
const testData = [
  {
    flex: 1,
    flexDirection: 'column',
    height: '100vh',
    padding: '0.4rem',
    children: [
      {
        flex: 1,
        flexDirection: 'row',
        children: [
          {
            flex: 2,
          },
          {
            flex: 3,
          },
        ],
      },
      {
        flex: 1,
      },
    ],
  },
];
// 初始init
const initData = [
  {
    flex: 1,
    flexDirection: 'column',
    height: '100vh',
    padding: '0.4rem',
    children: [
      {
        flex: 1,
      },
      {
        flex: 1,
      },
    ],
  },
];

const themeTemplates = [
  {
    title: '蓝色主题',
    content: '这是蓝色主题',
    theme: 'blueChain',
  },
  {
    title: '黑色主题',
    content: '这是黑色主题',
    theme: 'darkChain'
  }
]

/**
 * @description 渲染data
 * @param {*} data
 * @param {*} index
 */
const renderData = (data, index) => {
  return data.map((item, i) => {
    const { flex = '', flexDirection = '', children = [] } = item;
    const indexs = index === '' ? String(i) : `${index}-${i}`;
    const parentStyle = {
      flex,
      flexDirection,
      display: 'flex',
      height: '100%',
    };
    const childrenStyle = {
      flex,
      flexDirection,
    };
    if (children.length > 0) {
      return (
        <div style={parentStyle} data-id={indexs} key={indexs}>
          {children ? renderData(children, indexs) : null}
        </div>
      );
    }
    return (
      <div style={childrenStyle} data-id={indexs} key={indexs}>
        <Box index={indexs} info={item} />
      </div>
    );
  });
};

const index = () => {
  const {
    dispatch,
    data: {
      settings: { currentView },
    },
  } = useDva({}, ['settings']);

  const [ModalText, setModalText] = useState('content of Modal');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectValue, setSelectValue] = useState(-1);

  useEffect(() => {
    dispatch({
      type: 'settings/changeView',
      payload: testData,
    });
    return () => {};
  }, []);

  const addInitData = () => {
    dispatch({
      type: 'settings/changeView',
      payload: initData,
    });
  };

  const empty = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
        onClick={() => addInitData()}
      >
        empty
      </div>
    );
  };

  const handleTheme = (theme) => {
    axios
      .post('/api/handleCode', {
        jsCode: renderJSX(currentView),
        cssCode: renderCss(currentView),
        theme: theme,
      })
      .then(({ data }) => {
        if (data.code === 200) {
          history.push(data.msg);
        }
      })
      .catch(e => {
        console.log('get exception', e);
      });
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    if(selectValue) {
      setConfirmLoading(true);
      handleTheme(selectValue);
      setConfirmLoading(false);
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleClick = value => {
    setSelectValue(value)
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div
          style={{ border: '1px solid red', height: '300px', width: '600px' }}
        >
          {currentView.length > 0 ? renderData(currentView, '') : empty()}
        </div>
        <div>
          classNameTree
          <EditTree />
        </div>
        <div onClick={() => showModal()}>选择主题</div>
      </div>
      <div style={{ display: 'flex' }}>
        <CodeView code={renderJSX(currentView)} />
        <CodeView code={renderCss(currentView)} />
      </div>
      <Modal
        title="主题选择"
        visible={visible}
        onOk={() => handleOk()}
        confirmLoading={confirmLoading}
        onCancel={() => handleCancel()}
      >
        {themeTemplates.map((item, index) => (
          <Col span={8} key={index}>
            <ThemeCard
              selectValue={selectValue}
              value={item.theme}
              title={item.title}
              desc={item.content}
              onClick={() => handleClick(item.theme)}
            />
          </Col>
        ))}
      </Modal>{' '}
    </>
  );
};

export default index;
