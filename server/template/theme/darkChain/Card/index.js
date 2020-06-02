import React from 'react';
import styles from './index.less';

const Card = ({
  title,
  children,
  ...otherProps
}) => {
  return (
    <div {...otherProps} className={styles.cardWrapper}>
      {/* 四个角 */}
      <i className={styles.angle} />

      <div>
        {children}
      </div>
    </div>
  )
};

export default Card;