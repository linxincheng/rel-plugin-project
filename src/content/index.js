import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import MainModal from './components/mainModal'
import './antd-diy.css'
import './content.styl'
import Home from './components/home'

function Content() {
    const [mainModalVisible, setMainModalVisible] = useState(false)
    console.log('mainModalVisible');
    console.log(mainModalVisible);
    return (
        <div className="CRX-content">
            <div
                className="content-entry"
                onClick={() => {
                    setMainModalVisible(true)
                }}
            ></div>
            <Home
                mainModalVisible={mainModalVisible}
                onClose={async () => {
                    console.log(2412435452);
                    await setMainModalVisible(false);
                    console.log(mainModalVisible);
                }}
            />
        </div>
    )
}

const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)

ReactDOM.render(<Content />, app)

try {
    let insertScript = document.createElement('script')
    insertScript.setAttribute('type', 'text/javascript')
    insertScript.src = window.chrome.extension.getURL('insert.js')
    document.body.appendChild(insertScript)
} catch (err) {}
