import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, PerProvinsi } from './pages'
import './style.min.css'

const App = () =>{
    return (
        <Router>
            <div>
            <h1>Covid Tracker</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/global">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/indonesia">
                                Indonesia
                            </Link>
                        </li>
                        <li>
                            <Link to="/perprovinsi">
                                PerProvinsi
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/global">
                    <Global />
                </Route>
                <Route path="/indonesia">
                    <Indonesia />
                </Route>
                <Route path="/perprovinsi">
                    <PerProvinsi />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

