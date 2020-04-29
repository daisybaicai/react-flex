import Box from '@/components/box/box';
import CodeView from '@/components/CodeView/code';
import { useDva } from '../hooks/useDva';
import { useEffect } from 'react';

const testData = [
  {
    flex: 1,
    flexDirection: 'column',
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

const initData = [
  {
    flex: 1,
    flexDirection: 'column',
    children: [],
  },
];

const renderJSX = data => {
  return `
    const Index = (props) => {
      return ( 
        <> 
          ${renderDom(data, 0)}
        </>
      );
    }
    
    export default Index;
  `;
};

/**
 * @description 渲染jsx dom
 * @param {*} data 视图数据
 */
const renderDom = (data, index) => {
  let result = ``;
  data.map((item,i) => {
    const indexs = index === '' ? String(i) : `${index}-${i}`;
    const block = ' '.repeat(indexs.length - 1);
    // className {styles['box0-0']}
    // className2 className="styles.box${indexs}"
    if (item.children) {
      result += `
        ${block}<div className={styles['box${indexs}']}>
          ${block}${renderDom(item.children, indexs)}
        ${block}</div>
      `;
    } else {
      result += `
        ${block}<div className={styles['box${indexs}']}>
          ${block}children
        ${block}</div>
      `
    }
  });
  return result;
};

const renderCss = (data) => {
  return `
    ${renderCssTree(data, 0)}
  `
}

const renderCssTree = (data, index) => {
  let result = ``;
  data.map((item,i) => {
    const indexs = index === '' ? String(i) : `${index}-${i}`;
    const block = ' '.repeat(indexs.length - 1);
    if (item.children) {
      result += `
        ${block}.box${indexs}{
          ${renderStyles(item, block)}
          ${block}${renderCssTree(item.children, indexs)}
        ${block}}
      `;
    } else {
      result += `
        ${block}.box${indexs}{
          ${renderStyles(item, block)}
        ${block}}
      `
    }
  });
  return result;
}

const renderStyles = (item, block) => {
  let result = ``;
  if(item.flexDirection) {
    result += `${block}display: flex;
          `;
    result += `${block}flex-direction: ${item.flexDirection};
          `;
  }
  if(item.flex) {
    result += `${block}flex: ${item.flex};\n`;
  }
  return result;
}

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

  return (
    <>
      <div style={{ border: '1px solid red', height: '300px' }}>
        {currentView.length > 0 ? renderData(currentView, '') : empty()}
      </div>
      <div>
        code
        <CodeView code={renderJSX(currentView)} />
      </div>
      <div>
        css
        <CodeView code={renderCss(currentView)} />
      </div>
    </>
  );
};

export default index;
