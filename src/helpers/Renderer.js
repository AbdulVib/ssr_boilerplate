import React from 'react';
import { renderToString } from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'

//all routes
import Routes from '../client/Routes'

export default (req) => {
    const context = renderToString(
        <StaticRouter location={ req.path } context={{}}>
            <Routes />
        </StaticRouter>
    )

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${ context }</div>
            </body>
            <script src="bundle.js"></script>
        </html>
    `
}