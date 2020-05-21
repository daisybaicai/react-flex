import styles from './index3.less';
import Card from '@/components/theme/darkChain/Card'

const Index = props => {
  return (
    <>
      <div className={styles['box0-0']}>
        <div className={styles['box0-0-0']}>
          <div className={styles['box0-0-0-0']}>
            <Card />
          </div>

          <div className={styles['box0-0-0-1']}>
            children
          </div>
        </div>

        <div className={styles['box0-0-1']}>
          chidlren
        </div>
      </div>
    </>
  );
};

export default Index;
