var express = require('express')
var router = express.Router()
const { sendHtml } = require('../public/utils/send')

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' })
    let path = 'public/html/index.html'
    sendHtml(path, res)
})

module.exports = router
