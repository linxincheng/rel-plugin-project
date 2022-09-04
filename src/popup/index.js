import React, { useEffect } from 'react'
import './popup.styl'
// import Home from './pages/home'
// import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function Popup() {
    useEffect(() => {
        try {
            let insertScript = document.createElement('script')
            insertScript.setAttribute('type', 'text/javascript')
            insertScript.setAttribute('src', '/insert.js')
            document.body.appendChild(insertScript)
        } catch (err) {}
    }, []);
    return (
        <div className='popup2'>
            <a className='collection2'>收藏</a>
        </div>
    )
}

export default Popup
