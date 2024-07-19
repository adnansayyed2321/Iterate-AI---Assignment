import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import MyPujaBookings from './components/MyPujaBookings'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mypujabookings" component={MyPujaBookings} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
