const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require("./models/User")

// application/x-www-form-urlendcoded 형식의 데이터를
// 가져와서 분석할 수 있도록
app.use(bodyParser.urlencoded({ extended: true}))
// application/json 타입의 데이터를
// 가져와서 분석할 수 있도록
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    // 회원가입 할 때 필요한 정보들을 클라이언트에서 가저오면,
    // 그것들을 디비에 넣음

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err) {
            return res.json({success: false, err})
        }
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})