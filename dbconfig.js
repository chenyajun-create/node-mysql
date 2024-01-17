const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1', //服务器地址
  user: 'root', //账号
  password: '123456', //密码
  database: 'test', //数据库名称
})

const executeQuery = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
        return
      }

      connection.query(sql, values, (queryErr, results) => {
        connection.release()

        if (queryErr) {
          reject(queryErr)
        } else {
          resolve(results)
        }
      })
    })
  })
}

module.exports = {
  pool,
  executeQuery,
}
