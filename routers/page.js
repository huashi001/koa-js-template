const Router = require('koa-router')
let msg = ''

let page = new Router()
page.get('/', async (ctx) => {
  ctx.body = msg
  msg = ''
}).get('/a', (ctx) => {
  if (ctx.request.url.indexOf('dice') > -1) {
    msg = {
      type: 'window',
      key: 'open',
      fromer: '',
      receiver: '',
      windowids: [4],
      value: {
      },
    }
  }
  if (ctx.request.url.indexOf('draw') > -1) {
    msg = {
      type: 'window',
      key: 'open',
      fromer: '',
      receiver: '',
      windowids: [5],
      value: {

      },
    }
  }
  ctx.body = {
    state: 1
  }
}).get('/b', (ctx) => {
  if (ctx.request.url.indexOf('dice') > -1) {
    msg = {
      type: 'window',
      key: 'close',
      fromer: '',
      receiver: '',
      windowids: [4],
      value: {
      },
    }
  }
  if (ctx.request.url.indexOf('draw') > -1) {
    msg = {
      type: 'window',
      key: 'close',
      fromer: '',
      receiver: '',
      windowids: [5],
      value: {

      },
    }
  }
  ctx.body = {
    state: 1
  }
}).get('/playbook', async (ctx) => {
  //console.log(ctx, 'ctx', ctx.url.params, ctx.params, ctx.url.indexOf('student') > -1)
  if (ctx.url.includes('teacher')){
    ctx.body = {
      id: '1001', // playbook id
      frames: [
        {
          state: 'release',
          id: '1', // 布局1的id
          frame_detail_ids: [
            { id: '', window_id: 8, x: 0, y: 0, width: 1200, height: 50 },
            { id: '', window_id: 9, x: 0, y: 50, width: 200, height: 650 },
            { id: '', window_id: 3, x: 200, y: 50, width: 1000, height: 650 },
            // { id: '', window_id: 101, x: 200, y: 50, width: 200, height: 200 },
            // { id: '', window_id: 102, x: 400, y: 50, width: 200, height: 200 },
            // { id: '', window_id: 103, x: 600, y: 50, width: 200, height: 200 },
            // { id: '', window_id: 104, x: 800, y: 50, width: 200, height: 200 },
            // { id: '', window_id: 105, x: 1000, y: 50, width: 200, height: 200 },
          ],
        },
  
        {
          state: 'release',
          id: '2',
          frame_detail_ids: [
            // { window_id: 1, x: 100, y: 60, width: 1200, height: 700},
            { window_id: 2, x: 200, y: 50, width: 860, height: 500 },
            { window_id: 3, x: 1060, y: 50, width: 140, height: 650 },
          ],
        },
        {
          state: 'release',
          id: '3',
          frame_detail_ids: [
            { window_id: 6, x: 200, y: 50, width: 860, height: 650 },
          ],
        },
        {
          state: 'release',
          id: '4', // 上墙布局
          frame_detail_ids: [
            { window_id: 99, x: 200, y: 50, width: 860, height: 650 },
          ],
        },
        {
          state: 'release',
          id: '5', // 下载测试布局
          frame_detail_ids: [
            { window_id: 88, x: 200, y: 50, width: 860, height: 650 },
          ],
        },
      ],
      windows: [
        // { id: 1, path: '/#/home', show: true },
        { id: 2, x: 200, y: 50, width: 860, height: 500, path: '../src/lib/block/blockly/index.html' },
        { id: 3, x: 1060, y: 50, width: 140, height: 650, path: '/#/meeting', show: true },
        { id: 4, x: '45%', y: '40%', width: 200, height: 200, path: '/#/test', frame: true, show: false },
        { id: 8, x: 1060, y: 50, width: 140, height: 650, path: '/#/topbar', show: true },
        { id: 6, x: 1060, y: 50, width: 140, height: 650, path: '/#/video', show: true, dev: false },
        { id: 9, x: '45%', y: '40%', width: 200, height: 200, path: '/#/sidebar' },
        { id: 5, x: '45%', y: '70%', width: 400, height: 200, path: 'http://localhost:3000' },
        { id: 99, path: '/#/meeting2/teacher' }, // 上墙窗口
        { id: 88, path: '/#/download' }, // download窗口
        { id: 101, path: '/#/meeting2/teacher' },
        { id: 102, path: '/#/meeting2/100' },
        { id: 103, path: '/#/meeting2/100' },
        { id: 104, path: '/#/meeting2/100' },
        { id: 105, path: '/#/meeting2/100' },
      ],
    }
  } else {
    // student
    ctx.body = {
      id: '1001', // playbook id
      frames: [
        {
          state: 'release',
          id: '1', // 布局1的id
          frame_detail_ids: [
            { id: '', window_id: 8, x: 0, y: 0, width: 1200, height: 50 },
            { id: '', window_id: 3, x: 0, y: 50, width: 1200, height: 650 },
          ],
        },
  
        {
          state: 'release',
          id: '2',
          frame_detail_ids: [
            // { window_id: 1, x: 100, y: 60, width: 1200, height: 700},
            { window_id: 2, x: 0, y: 50, width: 1060, height: 500 },
            { window_id: 3, x: 1060, y: 50, width: 140, height: 650 },
          ],
        },
        {
          state: 'release',
          id: '3',
          frame_detail_ids: [
            { window_id: 6, x: 0, y: 50, width: 860, height: 650 },
          ],
        },
        {
          state: 'release',
          id: '4', // 上墙布局
          frame_detail_ids: [
            { window_id: 99, x: 0, y: 50, width: 860, height: 650 },
          ],
        },
        {
          state: 'release',
          id: '5', // 下载测试布局
          frame_detail_ids: [
            { window_id: 88, x: 0, y: 50, width: 860, height: 650 },
          ],
        },
      ],
      windows: [
        // { id: 1, path: '/#/home', show: true },
        { id: 2, x: 200, y: 50, width: 860, height: 500, path: '../src/lib/block/blockly/index.html' },
        { id: 3, x: 1060, y: 50, width: 140, height: 650, path: '/#/meeting', show: true },
        { id: 4, x: '45%', y: '40%', width: 200, height: 200, path: '/#/test', frame: true, show: false },
        { id: 8, x: 1060, y: 50, width: 140, height: 650, path: '/#/topbar', show: true },
        { id: 6, x: 1060, y: 50, width: 140, height: 650, path: '/#/video', show: true, dev: false },
        { id: 9, x: '45%', y: '40%', width: 200, height: 200, path: '/#/sidebar' },
        { id: 5, x: '45%', y: '70%', width: 400, height: 200, path: 'http://localhost:3000' },
        { id: 99, path: '/#/meeting2/teacher' }, // 上墙窗口
        { id: 88, path: '/#/download' }, // download窗口
        { id: 101, path: '/#/meeting2/teacher' },
        { id: 102, path: '/#/meeting2/100' },
        { id: 103, path: '/#/meeting2/100' },
        { id: 104, path: '/#/meeting2/100' },
        { id: 105, path: '/#/meeting2/100' },
      ],
    }
  }
}).get('/remoteGetResConfig', async (ctx) => {
  ctx.body = {
    name: 'remoteGetResConfig'
  }
}).post('/frame', async (ctx) => {
  console.log(ctx.request.body)
  msg = ctx.request.body;
})
module.exports = page;