import React from 'react'
import ReactDOM from 'react-dom'
import Home from './views/Home'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'

const Main = () => (
    <Provider store={store}>
        <Home />
    </Provider>
)

var mountNode = document.getElementById('app')
ReactDOM.render(<Main />, mountNode)
