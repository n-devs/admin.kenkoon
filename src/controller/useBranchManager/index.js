import React, { useState, useEffect } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
// import PropTypes from 'prop-types'
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';

function useBranchManager(url) {
    const [data, setData] = useState([])

    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        // { title: 'type', field: 'type', editable: 'never' },
        { title: 'title', field: 'title' },
        { title: 'sub_title', field: 'sub_title' },
        { title: 'show', field: 'show', type: 'boolean' },
        { title: 'background_color', field: 'background_color', render: rowData => <div style={{ backgroundColor: `${rowData.background_color}`, padding: 10 }}></div> },
        {
            title: 'address', field: 'address', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="address"
                        rowsMin={3} placeholder="address"
                        defaultValue={props.rowData.address}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        { title: 'open', field: 'open' },
        {
            title: 'start_time', field: 'start_time', editComponent: props => {
                return (
                    <Input
                        type="time"
                        name="start_time"
                        defaultValue={props.rowData.start_time}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        {
            title: 'end_time', field: 'end_time', editComponent: props => {
                return (
                    <Input
                        type="time"
                        name="end_time"
                        defaultValue={props.rowData.end_time}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        { title: 'tel', field: 'tel' },
        { title: 'fax', field: 'fax' },
        { title: 'email', field: 'email' },
        { title: 'link_map', field: 'link_map', render: rowData => <iframe src={rowData.link_map} width="150" height="100" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" /> },
        {
            title: 'img_map', field: 'img_map', render: rowData => <img src={(rowData.img_map !== undefined ? rowData.img_map.base64 : "")} style={{ width: 40, borderRadius: '5%' }} />, editComponent: props => (
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
        }
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

export default useBranchManager;