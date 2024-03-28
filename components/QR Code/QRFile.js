import React, { useState } from 'react'
import './QRCode.css'
import QRCode from 'react-qr-code'

const QRFile = () => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h1>Random QR Code</h1>
            <QRCode value={text} />
            <div>
                <h3>Enter your text here to generate the same QR Code</h3>
                <input type='text' value={text} onChange={handleChange} />
            </div>
        </div>
    )
}

export default QRFile;
