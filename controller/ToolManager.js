// const Database = require('better-sqlite3');
// const db = new Database('tool.db', { verbose: console.log });
let tools = [
  {
    name: "vue",
    entry: "//localhost:7104",
    path: '/vue',
    desc: '测试',
    id: 1,
  }
]
let id = 2
class ToolManagerController {
  test(){
    // const insert = db.prepare('INSERT INTO cats (name, age) VALUES (@name, @age)');
    // const insertMany = db.transaction((cats) => {
    //   for (const cat of cats) insert.run(cat);
    // });
    // insertMany([
    //   { name: 'Joey', age: 2 },
    //   { name: 'Sally', age: 4 },
    //   { name: 'Junior', age: 1 },
    // ]);
  }
  // 获取工具列表
  async getList(ctx) {
    ctx.body = {
      state: 1,
      data: tools
    }
  }
  // 添加工具
  async addTool(ctx) {
    const newTool = ctx.request.body.data
    newTool.id = id++
    if (newTool.name) {
      tools.push(newTool)
    }
    ctx.body = {
      state: 1,
      data: []
    }
  }
  // 删除工具
  async deleteTool(ctx) {
    const id = ctx.request.body.data
    tools = tools.filter((tool) => {
      return tool.name !== id
    })
    ctx.body = {
      state: 1,
      data: []
    }
  }
  // edit工具
  async editTool(ctx) {
    const tool = ctx.request.body.data
    tools.map((o, index) => {
      if (parseInt(o.id) === parseInt(tool.id)) {
        tools[index] = tool
        ctx.body = {
          state: 1,
          data: []
        }
      }
    })
  }
}

module.exports = new ToolManagerController();