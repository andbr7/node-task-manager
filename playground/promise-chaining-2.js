require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f7621c4e51cbc40304edd9d').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskandCount = async (id)=>{
    const task= await Task.findByIdAndDelete(id)
    const count= await Task.countDocuments({completed:false})
    return count
}

deleteTaskandCount('5f7ceefaa9735f354068674b').then((count)=>{  
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

