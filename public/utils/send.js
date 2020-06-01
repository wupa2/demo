const fs = require('fs')

const log = console.log.bind(console)

const sendHtml = (path, response) => {
  let options = {
      encoding: 'utf-8',
  }
  fs.readFile(path, options, (error, data) => {
      log(`读取的 html 文件 ${path} 内容是`, typeof data)
      // 用 response.send 函数返回数据给浏览器
      response.send(data)
  })
}

const sendJSON = (data, response) => {
  let r = JSON.stringify(data, null, 2)
  response.send(r)
}

module.exports = {
  sendHtml,
  sendJSON,
}
