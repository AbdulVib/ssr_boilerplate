//for async
import 'babel-polyfill'

import express from 'express'

import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'

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
    // console.log(matchRoutes(Routes, req.path), ' natch')
   const promises =  matchRoutes(Routes, req.path).map(({ route }) => {
       return route.loadData ? route.loadData(store) : null
    })

    // console.log(promises, ' promisee')
    Promise.all(promises)
        .then(() => {
            res.send(renderer(req, store))
        })
})

app.listen(3000, () => {
    console.log('port running on 3000')
})