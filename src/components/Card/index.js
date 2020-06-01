import React from 'react';
import { Row } from 'antd';
import styles from './index.less';
import headerIcon from '@/assets/blueChain/card/card-header-icon.png';

const Card = ({
  title,
  children,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className={styles.cardWrapper}>
      {/* 四个角 */}
      <i className={styles.angle} />
      <i className={styles.angle} />
      <i className={styles.angle} />
      <i className={styles.angle} />

      {/* 头部 */}
      <Row
        className={styles.cardHeader}
        type="flex"
        align="middle"
      >
        <img src={headerIcon} alt=">>" />
        <div className={styles.cardHeaderFont}>
          <div>{title}</div>
        </div>
      </Row>
      {/* 进度条动画 */}
      <div className={styles.progress}></div>
      <div>
        {children}
      </div>
    </div>
  )
};

export default Card;