import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useWallpaperManager(url) {
    const [columns] = useState([
        { title: 'id_category ', field: 'id_category' },
        { title: 'title', field: 'title' },
        { title: 'priority', field: 'priority' }
    ]);
    const [data, setData] = useState([
        {
            id_category: "0",
            title: "test",
            priority: 0
        }
    ])

    useEffect(() => {
        if (url !== "" || null || undefined) {
            axios.get(`${url}`).then(data => {
                // console.log(data);
                setData(data.data.data)
            })
        }
    }, [url])


    return { columns, data, setData }
}

export default useWallpaperManager;