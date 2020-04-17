import React from 'react';
import { renderToString } from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

//all routes
import Routes from '../client/Routes'

export default (req, store) => {
    const context = renderToString(
        <Provider store={store}>
            <StaticRouter location={ req.path } context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
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