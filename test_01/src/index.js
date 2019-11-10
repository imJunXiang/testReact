import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>
        </Switch>
    </main>
)

const Roster = () => (
    <div>
        <h2>This is a roster page!</h2>
        <Switch>
            <Route exact path='/roster' component={FullRoster}/>
        {/* <Route path='/roster/:number' component={Player}/> */}
        </Switch>
    </div>
)

const FullRoster = () => (
    <div>
        hello world
      {/* <ul>
        {
          PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/roster/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul> */}
    </div>
  )
  
  const Schedule = () => (
    <div>
      <ul>
        <li>6/5 @ Evergreens</li>
        <li>6/8 vs Kickers</li>
        <li>6/14 @ United</li>
      </ul>
    </div>
  )
  
  const Home = () => (
    <div>
      <h1>Welcome to the Tornadoes Website!</h1>
    </div>
  )

const App = function App() {
    return (
        <div>
            <Main/>
        </div>
    )
}

ReactDOM.render((
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
),document.getElementById('root'))