import express from 'express'


//because we r fetching our files from rendrer we dont need our import related to React
import renderer from './helpers/Renderer'

// import React from 'react'

// import { renderToString } from 'react-dom/server'

// //screens
// import Home from './client/component/Home'

const app = express()

//static files
app.use(express.static('public'))

//routes path
app.get('*', (req, res) => {
    res.send(renderer(req))
})

app.listen(3000, () => {
    console.log('port running on 3000')
})