// Redux
import { Provider } from 'react-redux'
import store from './lib/store'

// Components
import InboxScreen from './pages/inbox/InboxScreen'

// Styles
import './App.css'
import './index.css'

const App = () => {
    return (
        <Provider store={store}>
            <InboxScreen />
        </Provider>
    )
}

export default App
