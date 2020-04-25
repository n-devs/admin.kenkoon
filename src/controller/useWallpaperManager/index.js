import React, { useState, useEffect } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import PropTypes from 'prop-types'
import axios from 'axios'


function useWallpaperManager(url) {
    const [data, setData] = useState([])

    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        // { title: 'type', field: 'type', editable: 'never' },
        { title: 'title', field: 'title' },
        {
            title: 'image', field: 'image', render: rowData => <img src={(rowData.image !== undefined ? rowData.image.base64 : "")} style={{ width: 40, borderRadius: '5%' }} />, editComponent: props => (
                <div style={{
                    margin: "15px"
                }}>
                    <span style={{
                        display: "flex"
                    }}>
                        <input onChange={e => {
                            const reader = new FileReader();
                            var binData;

                            reader.addEventListener("load", function () {
                                props.onChange({
                                    name: binData.name,
                                    lastModified: binData.lastModified,
                                    lastModifiedDate: binData.lastModifiedDate,
                                    webkitRelativePath: binData.webkitRelativePath,
                                    size: binData.size,
                                    type: binData.type,
                                    base64: reader.result,
                                    binData: binData
                                })


                            }, false);

                            if (e.target.files[0]) {
                                reader.readAsDataURL(e.target.files[0]);
                                binData = e.target.files[0]
                                console.log(e.target.files[0]);

                            }
                        }} type="file" accept="image/*" name="image" id="file" style={{
                            marginBottom: '4px',
                        }} />
                    </span>
                    <p style={{
                        textAlign: 'center',
                        margin: '20px',
                    }}>
                        {/* <img id="output" src={valueSetting} width="40" /> */}
                    </p>
                </div>
            )
        },
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

export default useWallpaperManager;