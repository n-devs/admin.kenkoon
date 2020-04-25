import React, { useState, useEffect } from 'react';
import axios from 'axios'
import socketIOClient from 'socket.io-client'

export default function HomePage() {
    const [logData, setLogData] = useState(0)
    const socket = socketIOClient("http://localhost:9000")

    useEffect(() => {

        axios.get(`http://localhost:3100/api/status/log`).then(data => {
            // setLogData(data.data.result.length)
            console.log(data.data.result.length);
            socket.emit('view', data.data.result.length)
        })

        socket.on('view', (value) => {
            setLogData(value)
            console.log(value);

        })
    }, [logData])

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <h1 style={{
                fontSize: "80px"
            }}>{logData} View</h1>
        </div>

    )
}