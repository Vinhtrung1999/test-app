const express = require('express')
const app = express()
const port = 5000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    return res.render('home')
})

app.get('/detail-news/:id', (req, res) => {
    if (!req.params.id)
        return res.redirect('/')
    return res.render('detail-news')
})

app.listen(port, () => console.log(`http://localhost:${port}`))