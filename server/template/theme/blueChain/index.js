import Card from './Card';
import styles from './index.less';

const Index = props => {
  return (
    <>
      <div className={styles['box0-0']}>
        <div className={styles['box0-0-0']}>
          <div className={styles['box0-0-0-0']}>
            <div className={styles['box0-0-0-0-0']}>
              <div className={styles['box0-0-0-0-0-0']}>
                <Card />
              </div>

              <div className={styles['box0-0-0-0-0-1']}>
                <Card />
              </div>
            </div>

            <div className={styles['box0-0-0-0-1']}>
              <Card />
            </div>
          </div>

          <div className={styles['box0-0-0-1']}>
            <div className={styles['box0-0-0-1-0']}>
              <Card />
            </div>

            <div className={styles['box0-0-0-1-1']}>
              <div className={styles['box0-0-0-1-1-0']}>
                <Card />
              </div>

              <div className={styles['box0-0-0-1-1-1']}>
                <Card />
              </div>
            </div>
          </div>
        </div>

        <div className={styles['box0-0-1']}>
          <div className={styles['box0-0-1-0']}>
            <Card />
          </div>

          <div className={styles['box0-0-1-1']}>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
