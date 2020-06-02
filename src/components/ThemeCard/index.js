import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

const ThemeCard = props => {
  const {
    selectValue,
    value,
    title,
    desc,
    onClick = () => {},
  } = props;

  return (
    <div
      className={`${styles.TraceTemplate} ${
        selectValue === value ? styles.selected : ''
      }`}
      onClick={() => onClick(value)}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default ThemeCard;
