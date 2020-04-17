import express from 'express'

//because we r fetching our files from rendrer we dont need our import related to React
import renderer from './helpers/Renderer'
//stroe
import createStore from './helpers/createStore'

const app = express()

//static files
app.use(express.static('public'))

//routes path
app.get('*', (req, res) => {

    const store = createStore()

    //some logic to initialize and data to store

    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log('port running on 3000')
})