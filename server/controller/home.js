const HomeService = require('../service/home');
const path = require('path');
const fs = require('fs');
var admZip = require('adm-zip');

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
  },
  home: async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = '<h1>HOME page</h1>';
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = '<h1>HOME page /:id/:name</h1>';
  },
  login: async (ctx, next) => {
    ctx.response.body = `
        <form action="/user/register" method="post">
          <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
          <br/>
          <input name="password" type="text" placeholder="请输入密码：123456"/>
          <br/> 
          <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
          <br/>
          <button>GoGoGo</button>
        </form>
      `;
  },
  register: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    let data = await HomeService.register(name, password);
    ctx.response.body = data;
  },

  handleCode: async (ctx, next) => {
    let { jsCode, cssCode, theme } = ctx.request.body;
    // 读取配置
    const config = await HomeService.getConfig(theme);
    // 复制asset,components
    const res = await HomeService.removeAssetsAndComponents(config);
    // 处理页面文件
    const res2 = await HomeService.handlePages(config, jsCode, cssCode);

    console.log('r', res, res2);
    ctx.response.body = {
      code: 200,
      msg: `/create/${config.name}`,
    };
  },

  zip: async (ctx, next) => {
    let { theme } = ctx.request.body;
    const config = await HomeService.getConfig(theme);
    const pathRes = await HomeService.zip(config);
    const filePath = path.join(pathRes);
    const stats = fs.statSync(filePath); 
    const res = ctx.response;
    if(stats.isFile()){
      res.set({
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename='+'1.zip',
        'Content-Length': stats.size
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.end(404);
    }
    // var stack = [
    //   {
    //     in: '/home/',
    //     out: '/home'
    //   },
    //   {
    //     in: '/../',
    //     out: '/'
    //   },
    //   {
    //     in: '/home//foo/',
    //     out: '/home/foo'
    //   },
    //   {
    //     in: "/a/./b/../../c/",
    //     out: "/c"
    //   },
    //   {
    //     in: "/a/../../b/../c//.//",
    //     out: "/c"
    //   },
    //   {
    //     in: "/a//b////c/d//././/..",
    //     out: "/a/b/c"
    //   }
    // ]
    ctx.response.body = {
      s: bolan,
      res: reverBolan(bolan)
    }
    // ctx.response.body = {
    //   code: 200,
    //   msg: res
    // }
    // return res;
  },

  testword: async(ctx, next) => {
    var path2 = path.join(path.resolve(), '/test.docx');
    // const zip = new admZip(path2);
    // //将该docx解压到指定文件夹result下
    // zip.extractAllTo("./result", /*overwrite*/true);
    // return "xx";
    const zip = new admZip(path2); //filePath为文件路径
    let contentXml = zip.readAsText("word/document.xml");//将document.xml读取为text内容；
    return {
      "code": contentXml
    }
  }
};
