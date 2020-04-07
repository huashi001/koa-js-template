const Koa = require('koa')
const cors = require('@koa/cors');
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./routers')
const staticFiles = require('koa-static')
const schedule = require('node-schedule');
const delFilesInFolder = require('./utils/fs');
const app = new Koa()

app.use(cors())

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

// 定时任务，清空public/temp(每天下午1点清空)
const tempFileFolder = './public/temp'
const  scheduleCronstyle = ()=>{
  schedule.scheduleJob('0 0 13 * * *',()=>{
  //schedule.scheduleJob('50 * * * * *',()=>{
    console.log('清空public/temp:' + new Date());
    delFilesInFolder(tempFileFolder)
  }); 
}

scheduleCronstyle();

app.listen(3000, () => {
  console.log('I am listening port 3000')
})