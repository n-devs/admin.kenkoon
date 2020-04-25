import React, { useState, useEffect } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import PropTypes from 'prop-types'
import axios from 'axios'


function useWallpaperByVideoManager(url) {
    const [data, setData] = useState([])

    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        // { title: 'type', field: 'type', editable: 'never' },
        { title: 'title', field: 'title' },
        { title: 'link', field: 'link' },
        { title: 'show', field: 'show', type: 'boolean' },
        { title: 'opacity', field: 'opacity', type: 'numeric' }
    ]);

    const [table, setTable] = useState(
        {
            columns: columns,
            data: data
        }
    )

    useEffect(() => {
        if (url !== "" || null || undefined) {
            axios.get(`${url}`).then(data => {
                setData(data.data.result)
                setTable({
                    columns: columns,
                    data: data.data.result
                })
                console.log(data.data.result);
            })
        }
    }, [url])

    return { table, setTable }
}

export default useWallpaperByVideoManager;