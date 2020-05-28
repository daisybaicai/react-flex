const router = require('koa-router')()
const HomeController = require('./controller/home')
module.exports = (app) => {
  router.prefix('/api')

  router.get( '/', HomeController.index )
  
  router.get('/home', HomeController.home)
  
  router.get('/home/:id/:name', HomeController.homeParams)
  
  router.get('/user', HomeController.login)
  
  router.post('/user/register', HomeController.register)

  router.post('/handleCode', HomeController.handleCode)
  
  app.use(router.routes())
    .use(router.allowedMethods())
}
