const express = require('express')
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')
const config = require('./config/key')

const { User } = require("./models/User")
const { Post } = require("./models/Post")
const { Comment } = require("./models/Comment")

const { auth } = require('./middleware/auth');

const corsOptions = {
    origin : true,
    credentials: true
}

// application/x-www-form-urlendcoded 형식의 데이터를
// 가져와서 분석할 수 있도록
app.use(express.urlencoded({ extended: true}))
// application/json 타입의 데이터를
// 가져와서 분석할 수 있도록
app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOptions))

// 서버 연결 확인
app.listen(port, () => console.log(`Listening on port ${port}`))

// 데이터베이스 연결 확인
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//--------user 관련--------
// 회원가입
app.post('/api/user/register', (req, res) => {
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

/*
// 로그인한 사용자 정보 전달
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
*/

// 로그인
app.post('/api/user/login', (req, res)=>{
    console.log(req.body)
    User.findOne({id:req.body.id}, (err, user) =>{
        //아이디가 데이터베이스에 있는지 확인
        if(!user){
            console.log('디비에 유저 없음')
            return res.json({
                loginSuccess: false,
                message:"제공된 아이디에 해당하는 유저가 없습니다."
            })
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
            return res.json({loginSuccess:false, message:"비밀번호가 틀렸습니다."})
            
            
            user.generateToken((err,user) => {
                if(err) return res.status(400).send(err);
                //토큰 저장
                res.cookie("x_auth", user.token)
                .status(200)
                .json({ loginSuccess:true, userId:user._id})
            })
        })   
    })
})

// 회원 정보 불러오기
app.get('/api/user/info', auth, (req, res) => {
    console.log(5)
    console.log(req.user)
    User.findOne({ _id: req.user._id }
        , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send(req.user)
    })
})

// 회원 정보 수정
app.post('/api/user/modify', auth, (req, res) => {
    // console.log(1)
    // console.log(req.user)
    // console.log(2)
    // console.log(req.body)
    User.findOneAndUpdate({ _id: req.user._id },
        {$set:{ 
            id: req.body.id,
            user_info: req.body.user_info,
            name: req.body.name,
            birth: req.body.birth,
            gender: req.body.gender
        }}
        , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        })
    })
})

// 로그인한 유저가 작성한 게시글 불러오기
app.get('/api/user/post', auth, (req, res) => {
    Post.find({wname: req.user.id}, (err, user_post) =>{
        if(!user_post){
            console.log('해당 유저의 게시글이 없습니다.')
            return res.json({
                Success: false,
                message:"해당 유저의 게시글이 없습니다."
            })
        }
        if (err) return res.json({ success: false, err });
        return res.status(200).send(user_post)
    })
})

// 로그아웃
app.get('/api/user/logout', auth, (req, res) => {
    console.log(3)
    User.findOneAndUpdate({ _id: req.user._id },
        { token: "" }
        , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        })
    })
})

//---------커뮤니티----------
//커뮤니티 게시글 저장
app.post('/community/post/upload', auth,(req,res)=>{
    const post = Post(req.body)
    post.wname=req.user.id;
    post.save((err, content) => {
        if(err){
            console.log(err)
            return res.json({success:false, err})
        } 
        return res.status(200).json({     
            success:true
        })
    })
})

// 전체 게시글 불러오기
app.get('/community/post/info', (req, res) => {
    Post.find({}, (err, post_all) =>{
        if(!post_all){
            console.log('게시글이 없습니다.')
            return res.json({
                Success: false,
                message:"게시글이 없습니다."
            })
        }
        if (err) return res.json({ success: false, err });
        console.log(post_all)
        return res.status(200).send(post_all)
    })
})

// pid에 맞는 게시글 하나 가져오기
app.get('/community/post/one', (req, res) => {
    Post.findOne({pid:4}, (err, post_one) =>{
        if(!post_one){
            console.log('게시글이 없습니다.')
            return res.json({
                Success: false,
                message:"게시글이 없습니다."
            })
        }
        if (err) return res.json({ success: false, err });
        console.log(post_one)
        return res.status(200).send(post_one)
    })
})

// 게시글 수정
app.post('/community/post/modify', auth, (req, res) => {
    Post.findOneAndUpdate({ w_id: req.user._id, pid: 2},
        {$set:{ 
            title: req.body.title,
            content: req.body.content
        }}
        , (err, user) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        })
    })
})

//게시글 삭제
app.delete('/community/post/delete/:id',(req,res)=>{
    Post.findByIdAndRemove(req.params.id, function (err, del){
        if(err){
            return res.json({success:false, err})
        }        
        return res.status(200).json({     
            success:true,
            message:"deleted"
        }) 
    })
})

//댓글 저장
app.post('/community/comment/add/:id',auth,(req,res)=>{
    const newComment = new Comment (req.body)
    newComment.wname=req.user.id;
    Post.findOne({pid:1},(err, post)=>{
        if(err) return res.json({success:false, err}) 
        newComment.pid=post.pid;
      //  console.log(post);
        newComment.save((err, content) => {
            if(err){
                console.log(err)
                return res.json({success:false, err})
            } 
            return res.status(200).json({     
                success:true
            })
        })
    })
})

//댓글 삭제
app.delete('/community/comment/delete/:id',(req,res)=>{
    Comment.findByIdAndRemove(req.params.id, function (err, del){
        if(err){
            return res.json({success:false, err})
        }        
        return res.status(200).json({     
            success:true,
            message:"deleted"
        }) 
    })
})
