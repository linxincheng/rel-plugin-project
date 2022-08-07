import React, { Fragment } from 'react'
import './popup.styl'
import Home from './pages/home'
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function Popup() {
    return (
        // <HashRouter>
        //     <Switch>
        //         <Route key="/login" path="/login" component={Home} />
        //         <Route path="/home" path="/home" component={Home} />
        //     </Switch>
        // </HashRouter>
        <Home />
    )
}

export default Popup
