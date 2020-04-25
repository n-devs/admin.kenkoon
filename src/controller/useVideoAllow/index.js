import React,{ useState, useEffect } from 'react';
import axios from 'axios';


function useVideoAllow(url) {
    var d = new Date();
    const [columns] = useState([
        { title: 'id_video ', field: 'id_video' },
        { title: 'title', field: 'title' },
        { title: 'description', field: 'description' },
        { title: 'url', field: 'url' }
    ]);
    const [data, setData] = useState([
        {
            id_video: "0",
            title: "test",
            description: 'user',
            url: "https://www.youtube.com/embed/dt0R03bwdcY"
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


    return { columns, data }
}

export default useVideoAllow;