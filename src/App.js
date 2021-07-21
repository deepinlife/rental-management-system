import { Suspense, lazy } from 'react'
import { Header } from './components'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const HomePage = lazy(() => import('./screens/home'))
const Categories = lazy(() => import('./screens/categories'))
const CategoryDetails = lazy(() => import('./screens/category-detail'))

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/category/:location" component={Categories} />
              <Route exact path="/category/:name/detail" component={CategoryDetails} />
              <Route exact path="/category/:location/:branch" component={Categories} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
