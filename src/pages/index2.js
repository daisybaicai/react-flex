import styles from './index2.less';

const Index = props => {
  return (
    <>
      <div className={styles['box0-0']}>
        <div className={styles['box0-0-0']}>
          <div className={styles['box0-0-0-0']}>children</div>

          <div className={styles['box0-0-0-1']}>children</div>
        </div>

        <div className={styles['box0-0-1']}>children</div>
      </div>
    </>
  );
};

export default Index;
