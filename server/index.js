// const fs  = require('fs');
const fs = require('fs-extra');
const path = require('path');
const co = require('co');
const thunkify = require('thunkify');
const prettier = require('prettier');

var args = {
  name: 'blueChain',
  container: 'Card',
  background: '@/assets/blueChain/card/bg.png',
};

var indexJsPath = path.join(path.resolve(), '/test/index.js');
var indexLessPath = path.join(path.resolve(), '/test/index.less');

let indexJs = `
const Index = (props) => {
    return ( 
      <> 
        
        <div className={styles['box0-0']}>
          
          <div className={styles['box0-0-0']}>
            
            <div className={styles['box0-0-0-0']}>
              children
            </div>
    
            <div className={styles['box0-0-0-1']}>
              children
            </div>
    
          </div>
    
          <div className={styles['box0-0-1']}>
            children
          </div>
    
        </div>
    
      </>
    );
  }
  
  export default Index;
`;
let indexLess = `


.box0-0{
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    padding: 0.4rem;
  
    
    .box0-0-0{
      display: flex;
      flex-direction: row;
      flex: 1;
      padding-bottom: 0.3rem;
      
      .box0-0-0-0{
        flex: 2;
        padding-right: 0.3rem;
      }

      .box0-0-0-1{
        flex: 3;
  
      }

    }

    .box0-0-1{
      flex: 1;
  
    }

  }

`;

function handleReadFiles() {
  fs.readFile(indexJsPath, 'utf-8', function (err, data) {
    if (!err) {
      indexJs = data;
      console.log('------- read index.js file ---------');
    }
  });

  fs.readFile(indexLessPath, 'utf-8', function (err, data) {
    if (!err) {
      indexLess = data;
      console.log('------- read index.less file ------');
    }
  });
}

console.log('------ read config args, copy assets ----');

//

var outputDirPath = path.join(path.resolve(), '/myapp/src');
var assetsDirPath = path.join(path.resolve(), '/myapp/src/assets');
var themeDirPath = path.join(path.resolve(), '/myapp/src/components');
var templateThemeDirPath = path.join(path.resolve(), '/template/theme');
var templateAssetsDirPath = path.join(path.resolve(), '/template/assets');

// 删除已经有的文件
fs.removeSync(assetsDirPath);
// 确保文件夹存在
fs.ensureDirSync(path.join(assetsDirPath, args.name));
// 复制asset文件
fs.copySync(
  path.join(templateAssetsDirPath, args.name),
  path.join(assetsDirPath, args.name),
);

// 复制components文件
fs.removeSync(path.join(outputDirPath, '/components'));
fs.ensureDirSync(path.join(outputDirPath, '/components', args.name));

function handleFiles() {
  // handleReadFiles();
  // 移动index.js
  // 移动index.less
  const indexPathJs = path.join(outputDirPath, '/pages/index.js');
  const indexPathLess = path.join(outputDirPath, '/pages/index.less');

  const container = 'Card';
  let jsresult = '';
  let lessresult = '';

  // console.log('in');
  // console.log('ins', indexJs, indexLess);

  // handle css(less)
  // 找到第一个大括号的最后一行 加入一行再换行
  const res = indexLess.split(/(?<=\{)/);
  if (res.length > 1) {
    let [arrhead, ...arrtail] = res;

    let head =
      arrhead +
      `
    background-image:url('~@/assets/blueChain/card/bg.png');`;
    lessresult = head + arrtail.join('');
    // preitter can't support css ?
    // result = prettier.format(result, {
    //     parser: 'less',
    //     singleQuote: true
    // });
  }

  // hanldejs
  if(container) {
    const content = indexJs.replace(/children/g, '<Card />');
    let dependJs = `
        import ${container} from '@/components/${container}'
    `;
    let indexlessStr = `
        import styles from './index.less';
    `
    jsresult += dependJs;
    jsresult += indexlessStr;
    jsresult += content;

    jsresult = prettier.format(jsresult, {
        singleQuote: true
      });
  }


  fs.writeFile(indexPathJs, jsresult, 'utf-8', function (err) {
    if (!err) {
      console.log('-----write index.js-----');
    }
  });

  fs.writeFile(indexPathLess, lessresult, 'utf-8', function (err) {
    if (!err) {
      console.log('-----write index.less-----');
    }
  });

  // 处理index.less
  // 将对应的配置引入
}

// console.log('dddd',   path.join(templateThemeDirPath, args.name, 'Card'));

fs.copySync(
  path.join(templateThemeDirPath, args.name, 'Card'),
  path.join(themeDirPath, 'Card'),
);

// handleReadFiles();
handleFiles();
