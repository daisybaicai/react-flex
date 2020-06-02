import Card from '@/components/Card';

import styles from './index.less';

const Index = (props) => {
  return (
    <>
      <div className={styles['box0-0']}>
        <div className={styles['box0-0-0']}>
          <div className={styles['box0-0-0-0']}>
            <Card />
          </div>

          <div className={styles['box0-0-0-1']}>
            <Card />
          </div>
        </div>

        <div className={styles['box0-0-1']}>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Index;
