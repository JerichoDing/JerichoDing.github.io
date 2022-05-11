const Koa = require('koa')
const path = require('path')
const app = new Koa()
const static = require('koa-static')
const EndSkin = require('endskin');
const blog = EndSkin.create(__dirname + '/view/blog.html');
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './view'

app.use(static(
  path.join( __dirname,  staticPath)
))


/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
async function route( url ) {
  let view = '404.html'
  switch ( url ) {
    case '/':
      view = 'index.html'
      break
    case '/index':
      view = 'index.html'
      break
    case '/todo':
      view = 'todo.html'
      break
    case '/blog':
      view = 'blog.html'
      break
    case '/404':
      view = '404.html'
      break
    default:
      break
  }
  const template = EndSkin.create(__dirname + `/view/${view}`)
  template.assign({ url: '3232323' })
  return template.html();
}

app.use( async ( ctx ) => {
  let url = ctx.request.url
  console.log('request.url-->',url)
  let html = await route( url )
  ctx.body = html
})

app.listen(3000)
console.log('app is starting at port 3000')