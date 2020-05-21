import _ from 'loadsh';
/**
 * @description 路径转化成数组
 * @param {*} pathStr 
 */
export const indexToArray = pathStr => `${pathStr}`.split('-').map(n => +n);


/**
 * @description 交换元素
 * @param {*} newIndex 新Index
 * @param {*} oldIndex 旧Index
 * @param {*} data 原data
 */
export const swap = (newIndex, oldIndex, data) => {
  let temp = data[newIndex];
  data[newIndex] = data[oldIndex];
  data[oldIndex] = temp; 
}

/**
 * @description 添加元素
 * @param {*} newIndex 新的Index路径
 * @param {*} data 原始data
 * @param {*} dragItem 需要添加的元素
 */
export const itemAdd = (newIndex, data, dragItem) => {
  let newindexarr = indexToArray(newIndex);
  const first = newindexarr.shift();
  let parent = data;
  if(newindexarr.length > 0) {
    parent = parent[first];
    newindexarr.forEach((item, index) => {
      if(index === newindexarr.length -1 ) {
        parent.children.splice(item, 0 , dragItem);
      } else {
        parent = parent.children[item];
      }
    })
  } else {
    parent.splice(first, 0 , dragItem);
  }
  return data;
}

/**
 * @description 删除元素
 * @param {*} oldIndex 原始Index路径
 * @param {*} data 原始data
 */
export const itemRemove = (oldIndex, data) => {
  const oldIndexArr = indexToArray(oldIndex);
  let first = oldIndexArr.shift();
  let parent = data;
  if(oldIndexArr.length > 0) {
    parent = parent[first];
    oldIndexArr.forEach((item, index) => {
      if(index === oldIndexArr.length -1) {
        parent.children.splice(item, 1);
      } else {
        parent = parent.children[item];
      }
    })
  } else {
    parent.splice(first, 1);
  }
  return data;
}

/**
 * @description 更新item信息
 * @param {*} newIndex 原index
 * @param {*} data data
 * @param {*} dragItem 点击的item
 */
export const itemUpdateInfo = (newIndex, data, dragItem) => {
  let newindexarr = indexToArray(newIndex);
  const first = newindexarr.shift();
  let parent = data;
  if(newindexarr.length > 0) {
    parent = parent[first];
    newindexarr.forEach((item, index) => {
      if(index === newindexarr.length -1 ) {
        let current = parent.children[item];
        dragItem = Object.assign({},current, dragItem);
        parent.children.splice(item, 1, dragItem);
      } else {
        parent = parent.children[item];
      }
    })
  } else {
    const {children, ...config} = parent[first];
    const configInfo = Object.assign({},config, dragItem);
    parent.splice(first, 1, {...configInfo, children});
  }
  return data;
}


/**
 * @description 渲染jsx
 * @param {*} data 视图数据
 */
export const renderJSX = data => {
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
    const {className = ''} = item;
    const classNameText = className ? className : `box${indexs}`;
    if (item.children) {
      result += `
        ${block}<div className={styles['${classNameText}']}>
          ${block}${renderDom(item.children, indexs)}
        ${block}</div>
      `;
    } else {
      result += `
        ${block}<div className={styles['${classNameText}']}>
          ${block}children
        ${block}</div>
      `
    }
  });
  return result;
};

/**
 * @description 渲染css
 * @param {*} data 
 */
export const renderCss = (data) => {
  return `
    ${renderCssTree(data, 0)}
  `
}

/**
 * @description 渲染css树
 * @param {*} data 
 * @param {*} index 
 */
const renderCssTree = (data, index, parentLen = 0, parentDirection = '') => {
  let result = ``;
  data.map((item,i) => {
    const indexs = index === '' ? String(i) : `${index}-${i}`;
    const block = ' '.repeat(indexs.length - 1);
    const {className = '', flexDirection = ''} = item;
    const classNameText = className ? className : `box${indexs}`;
    if (item.children) {
      result += `
        ${block}.${classNameText}{
          ${renderStyles(item, block, item.children.length, i, parentDirection)}
          ${block}${renderCssTree(item.children, indexs, item.children.length, flexDirection)}
        ${block}}
      `;
    } else {
      result += `
        ${block}.${classNameText}{
          ${renderStyles(item, block, parentLen, i, parentDirection)}
        ${block}}
      `
    }
  });
  return result;
}

/**
 * @description 渲染具体的css
 * @param {*} item 样式
 * @param {*} block 空格数
 */
const renderStyles = (item, block, childrenLen, index, parentDirection) => {
  let result = ``;
  if(item.flexDirection) {
    result += `${block}display: flex;
          `;
    result += `${block}flex-direction: ${item.flexDirection};
          `;
  }
  if(item.flex) {
    result += `${block}flex: ${item.flex};
          `;
  }

  if(item.height) {
    result += `${block}height: ${item.height};
          `;
  }

  if(item.background) {
    result += `${block}background-image:url('~${item.background}');
          `;
  }

  if(item.padding) {
    result += `${block}padding: ${item.padding};
          `;
  }

  if(childrenLen > 1 && index < childrenLen - 1) {
    if(parentDirection === 'row') {
      result += `${block}padding-right: 0.3rem;`
    }
    if(parentDirection === 'column') {
      result += `${block}padding-bottom: 0.3rem;`
    }
  }
  return result;
}