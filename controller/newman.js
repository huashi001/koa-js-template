
import { run } from '../services/newman'

class NewmanControllers {
  // 执行单个request
  async run (ctx) {
    const request = ctx.request.body
    if (!request) {
      ctx.body = {
        state: 0,
        msg: 'no request data'
      }
      return
    }
    try {
      let summary = await run({
        "collection": {
          "item": request
        }
      })
      let res = summary.run.executions[0].response
      let resBody = summary.run.executions[0].response.stream.toString('utf-8')
      ctx.body = {
        state: 1,
        data: summary,
        //response: res,
        test: resBody
      }
    } catch (e) {
      console.log('error', e)
      ctx.body = {
        state: 0,
        msg: `${e}`
      }
    }
  }
  // 执行collection
  async runCollection (ctx) {
    const collection = ctx.request.body
    if(!collection){
      ctx.body = {
        state: 0,
        msg: 'collection is required'
      }
      return
    }
    try{
      let summary = await run({
        "collection": collection
      })
      let executions = summary.run.executions
      ctx.body = {
        state: 1,
        data: summary,
        executions
      }
    }catch(e){
      console.log('error', e)
      ctx.body = {
        state: 0,
        msg: `${e}`
      }
    }
  }
}

export default new NewmanControllers();
