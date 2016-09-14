const http = require('http')
const start = new Date().toISOString()
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Started on:\n' + start)
})

server.listen(9000, () => {
  console.log('Server started')
})
