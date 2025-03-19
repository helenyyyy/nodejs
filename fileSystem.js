const fs = require('fs');

//create a file
// fs.writeFile('./demo.txt', 'hello world!!',()=>{
//     console.log('file created');
// })

//read a file
fs.readFile('./demo.txt', (error, data)=>{
    if(error){
        console.log(error);
    }else{
    // console.log(data);
    console.log(data.toString());
    }
    console.log('end of program');
})

// console.log('end of program');

//create a file
// if(!fs.existsSync('./image'))
// {
//     fs.mkdir('./image',(error)=>{
//         if(error)   
//             console.log(error);
//         else
//             console.log('folder created');
//     })
// }

//delete a file
// if(fs.existsSync('./delete.txt'))
// {
//     fs.unlink('./delete.txt', (error)=>{
//         if(error)
//             console.log(error);
//         else
//           console.log('file deleted');
//     })
// }