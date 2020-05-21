import styles from './index2.less';
import Card from '@/components/theme/blueChain/Card'

const Index = props => {
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
