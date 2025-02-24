import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import myStore from './Redux/Store/myStore.js'
import {UserProvider} from './Contexts/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </StrictMode>,
)
