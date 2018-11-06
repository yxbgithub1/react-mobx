import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react'
import { Todo } from './views'
import store from './store'

class App extends Component{
    render(){
        return (
            <Provider {...store}>
                <Todo/>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

//server worker缓存
registerServiceWorker();

