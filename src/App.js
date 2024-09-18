import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CourseDetails from './components/CourseDetails'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
