const fs = require('fs-extra');
const path = require('path');
const prettier = require('prettier');

const FromBasePath =
  path.resolve().indexOf('server') === -1
    ? path.join(path.resolve(), 'server')
    : path.resolve();
const ToBasePath =
  path.resolve().indexOf('server') === -1
    ? path.resolve()
    : path.join(path.resolve(), '..');

module.exports = {
  register: async (name, pwd) => {
    let data;
    if (name == 'ikcamp' && pwd == '123456') {
      data = `Hello， ${name}！`;
    } else {
      data = '账号信息错误';
    }
    return data;
  },
  getConfig: async (theme) => {
    var templateThemeDirPath = path.join(path.resolve(), '/template/theme');
    var themePath = path.join(templateThemeDirPath, `${theme}/config.json`);
    return new Promise(function (resolve, reject) {
      fs.readFile(themePath, 'utf-8', function (err, data) {
        if (!err) {
          const configJson = JSON.parse(data);
          resolve(configJson);
        }
      });
    });
  },
  removeAssetsAndComponents: async (config) => {
    var outputDirPath = path.join(ToBasePath, '/src');
    var assetsDirPath = path.join(ToBasePath, '/src/assets');
    var templateThemeDirPath = path.join(FromBasePath, '/template/theme');
    var templateAssetsDirPath = path.join(FromBasePath, '/template/assets');

    return new Promise((resolve, reject) => {
      // 删除已经有的文件
      fs.removeSync(path.join(assetsDirPath, config.name));
      // 确保文件夹存在
      fs.ensureDirSync(path.join(assetsDirPath, config.name));
      // 复制asset文件
      fs.copySync(
        path.join(templateAssetsDirPath, config.name),
        path.join(outputDirPath, '/assets', config.name),
      );

      // 复制components文件
      fs.removeSync(path.join(outputDirPath, '/components', config.container));
      fs.ensureDirSync(
        path.join(outputDirPath, '/components', config.container),
      );

      fs.copySync(
        path.join(templateThemeDirPath, config.name, config.container),
        path.join(outputDirPath, '/components', config.container),
      );

      resolve(1);
    });
  },
  handlePages: async (config, jscode, csscode) => {
    const outputDirPath = path.join(ToBasePath, '/src');

    const indexPathJs = path.join(
      outputDirPath,
      `/pages/create/${config.name}/index.js`,
    );
    const indexPathLess = path.join(
      outputDirPath,
      `/pages/create/${config.name}/index.less`,
    );

    return new Promise((resolve, reject) => {
      fs.removeSync(indexPathJs);
      fs.removeSync(indexPathLess);

      fs.ensureFileSync(indexPathJs);
      fs.ensureFileSync(indexPathLess);

      const container = config.container;
      let jsresult = '';
      let lessresult = '';

      const res = csscode.split(/(?<=\{)/);
      if (res.length > 1) {
        let [arrhead, ...arrtail] = res;

        let head =
          arrhead +
          `
      background-image:url('~${config.background}');`;
        lessresult = head + arrtail.join('');
      }

      // hanldejs
      if (container) {
        const content = jscode.replace(/children/g, `<${container} />`);
        let dependJs = `
          import ${container} from '@/components/${container}'
      `;
        let indexlessStr = `
          import styles from './index.less';
      `;
        jsresult += dependJs;
        jsresult += indexlessStr;
        jsresult += content;

        jsresult = prettier.format(jsresult, {
          singleQuote: true,
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
      resolve(2);
    });
  },
};
