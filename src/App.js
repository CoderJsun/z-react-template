/**第三方 */
import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'


/**功能性 */
import routes from './router';
import store from './store'


export default class App extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    {renderRoutes(routes)}
                </HashRouter>
            </Provider>
        )
    }
}
