import { createRoot } from 'react-dom/client'
// import Router from '@/src/Router'
import '@/styles/tailwind.css'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import Home from '@/views/Home'

const Main = () => (
    <Provider store={store}>
        {/* <Router /> */}
        <Home />
    </Provider>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Main />)
