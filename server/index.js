const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')

const { User } = require("./models/User")
const { auth } = require('./middleware/auth');


// application/x-www-form-urlendcoded 형식의 데이터를
// 가져와서 분석할 수 있도록
app.use(bodyParser.urlencoded({ extended: true}))
// application/json 타입의 데이터를
// 가져와서 분석할 수 있도록
app.use(bodyParser.json())
app.use(cookieParser());

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

addEventListener.post('/login', (res, req)=>{
    User.findOne({email:req.body.email}, (err, user) =>{
        //이메일이 데이터베이스에 있는지 확인
        if(!user){
            return res.json({
                loginSuccess: false,
                message:"제공된 이메일에 해당하는 유저가 없습니다."
            })
        }

    user.comparePassword(req.body.comparePassword,(err, isMatch)=>{
        if(!isMatch)
            return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다."})
        user.generaToken((err,user) => {
            if(err) return res.status(400).send(err);

            //토큰 저장
            res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess:true, userId:user._id})
        })

    })   
    })
})



app.get('/auth', auth, (req, res) => {
    //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
    res.status(200).json({
        _id: req.user._id,
        //isAdmin: req.user.role === 0 ? false : true, 일반 유저 관리자 유저 구분 여부?
        isAuth: true,
        id: req.user.id,
        userInfo: req.user.userInfo,
        name: req.user.name,
        birth:req.user.birth,
        gender:req.user.gender,
        image: req.user.image

    })
})


app.get('/logout', auth, (req, res) => {
    // console.log('req.user', req.user)
    User.findOneAndUpdate({ _id: req.user._id },
        { token: "" }
        , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})