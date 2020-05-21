import styles from './index.less';

const ChartsBox = props => {
  const { name } = props;
  var images = require(`../../assets/charts_image/${name}.jpg`);

  return (
    <div className={styles.charts}>
      <h4 className={styles.chartsTitle}>{name}</h4>
      <img className={styles.chartsImg} src={images}/>
    </div>
  );
};

export default ChartsBox;
