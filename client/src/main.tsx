
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import {Toaster} from "react-hot-toast"

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
    <Toaster/>
    <App/>
    </Provider>
)
