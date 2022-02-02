const express = require('express')
const path = require('path')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config/key')

const { User } = require("./models/User")
const { auth } = require('./middleware/auth');

const corsOptions = {
    origin : true,
    credentials: true
}

// application/x-www-form-urlendcoded 형식의 데이터를
// 가져와서 분석할 수 있도록
app.use(bodyParser.urlencoded({ extended: true}))
// application/json 타입의 데이터를
// 가져와서 분석할 수 있도록
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors(corsOptions))


app.listen(port, () => console.log(`Listening on port ${port}`))

var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(config.mongoURI, function (err, client) {
    if (err) return console.log(err);

    db = client.db("SantaIsSanta");
})

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
   // useNewUrlParser: true,
  //  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


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

app.post('/api/user/login', (res, req)=>{
    console.log(res.body)
    db.collection('user').findOne({id:res.body.id}, (err, user) =>{
        console.log(2)
        console.log(user)
        //아이디가 데이터베이스에 있는지 확인
        if(!user){
            console.log('디비에 유저 없음')
            return req.json({
                loginSuccess: false,
                message:"제공된 아이디에 해당하는 유저가 없습니다."
            })
        }
        if(user.password != res.body.password){
            console.log('비밀번호 틀림')
            return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다."})
        }
        console.log('로그인 성공')
        return req.status(200)
        .json({ loginSuccess:true, userId:user._id})

        // User.generateToken((err,user) => {
        //     if(err) return res.status(400).send(err);

        //     //토큰 저장
        //     res.cookie("x_auth", user.token)
        //     .status(200)
        //     .json({ loginSuccess:true, userId:user._id})
        //     })
        })   
    })



app.get('/auth', auth, (req, res) => {
    //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
    res.status(200).json({
        _id: req.user._id,
        isAuth: true,
        id: req.user.id,
        user_info: req.user.user_info,
        name: req.user.name,
        birth:req.user.birth,
        gender:req.user.gender,
        image: req.user.image

    })
})


app.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id },
        { token: "" }
        , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        })
    })
})