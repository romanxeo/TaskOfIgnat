import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter, Switch, Redirect, Route} from 'react-router-dom'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <div>react homeworks:</div>
            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
