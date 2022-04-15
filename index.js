const conectWithDB = require('./DB')
const express = require('express');
const app = express()
app.use(express.json())
const port = 5000
conectWithDB();
app.use('/api/auth', require('./Route/auth'));
app.use('/api/note', require('./Route/note'));
app.get('/',
    (req, res) => {
        res.send('Hii jagu how are you!!')
    }
)

app.listen(port,
    () => {
        console.log(`Example app listening on port ${port}`)
    }
)