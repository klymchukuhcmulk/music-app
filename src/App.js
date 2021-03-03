import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import routes from './router'
import RouterView from './router/RouterView'
import Sidebar from './components/Sidebar/Sidebar'

import './styles/App.scss'

function App () {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main className="music-main">
        <Switch>
          {routes.map((route, i) => (
            <RouterView
              key={i}
              {...route}
            />
          ))}
        </Switch>
      </main>
    </Router>
  )
}

export default App
