//npm init -y    //-->initial command for creating package.json
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const multer  = require('multer')
const { mergePdfs } = require('./merge')
const upload = multer({ dest: 'uploads/' })

app.use('/static',express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"templates/index.html"))
})
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {     //2 is the maximum numbers of files allowed
    // console.log(req.files)  //this prints the data of the pdf files in console. this is just for development purpose
    let date = await mergePdfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
    res.redirect(`http://localhost:3000/static/${date}.pdf`)
    // res.send({data:req.files})
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// for starting server // node server.js 
//for autorefresh of server download //npm i -g nodemon