const express= require('express')
require('./db/mongoose')
const userRouter= require('./routers/user')
const taskRouter= require('./routers/task')

const app= express()
const port = process.env.PORT || 3000

// // app.use((req, res, next) => {
// //     if (req.method === 'GET') {
// //         res.send('GET request are disabled')
// //     } else{
// //         next()
// //     }
// // })

// app.use((req, res, next) => {
//     if (req.method) {
//         res.status(503).send('The site is under maintenance, please try later')
//     } else{
//         next()
//     }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log("Server is up on port "+ port)
})

//const jwt = require('jsonwebtoken')

// const myFunction = async ()=>{
//     const token = jwt.sign({_id:'abc123'},'thisismynewcourse', { expiresIn:'7 days' })
//     console.log(token)

//     const data= jwt.verify(token,'thisismynewcourse')
//     console.log( data )
// }

// myFunction()