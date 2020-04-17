import express from 'express'
import React from 'react'

import { renderToString } from 'react-dom/server'

//screens
import Home from './client/component/Home'

const app = express()

//static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    const context = renderToString(<Home />)

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${ context }</div>
            </body>
            <script src="bundle.js"></script>
        </html>
    `

    res.send(html)
})

app.listen(3000, () => {
    console.log('port running on 3000')
})