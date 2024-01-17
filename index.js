const { pool, executeQuery } = require('./dbconfig')
const express = require('express')
const app = express()

app.get('/get', async (req, res) => {
  try {
    const sql = `SELECT * FROM test;`
    const result = await executeQuery(sql)

    res.send({
      result,
      code: 200,
    })
  } catch (error) {
    console.error('Error executing query:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen('3000', () => {
  console.log(`node服务已启动 端口号是：3000`)
})
