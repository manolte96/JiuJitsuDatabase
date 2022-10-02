const express = require('express')
const app = express()
const port = 3000


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
connection.connect();

//get access to the users file in the router folder
let userRoutes = require("./routes/users.js")
//and use it
app.use(userRoutes)
// enable the app to parse JSON bodies in post/put
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello JiuJitsu World!')
})

app.listen(port, () => {
  console.log(`Brazilian Jiu Jitsu app listening on port ${port}`)
})