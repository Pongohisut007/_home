const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'world', // MAKE SURE this database exists
  port: 3306
})

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err)
    return
  }
  console.log('Connected to MySQL (world database)')
})

// Test route
app.get('/', (req, res) => {
  res.send('API is running')
})

// API route
app.get('/api/nongao', (req, res) => {
  const sql = 'SELECT * FROM car LIMIT 10'

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Query error:', err)
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})

// Start server
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001')
})
