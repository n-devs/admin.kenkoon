import React, { useState, useEffect, Fragment } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import PropTypes from 'prop-types'
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


function useCollectionManager(url) {
    const [data, setData] = useState([])
    // const [groupImage, setGroupImage] = useState(rowData.image.group)
    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        // { title: 'type', field: 'type', editable: 'never' },
        { title: 'number', field: 'number' },
        { title: 'name', field: 'name' },
        {
            title: 'cols', field: 'cols', lookup: {
                1: "1",
                2: "2"
            }
        },
        {
            title: 'type', field: 'type', lookup: {
                teak_and_stainless: "teak_and_stainless",
                mesh_and_stainless: "mesh_and_stainless",
                pure_teak: "pure_teak",
                glass_and_stainless: "glass_and_stainless"
            }
        },
        {
            title: 'detail_en', field: 'detail_en', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail_en"
                        rowsMin={3} placeholder="detail_en"
                        defaultValue={props.rowData.detail_en}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        {
            title: 'detail_th', field: 'detail_th', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail_th"
                        rowsMin={3} placeholder="detail_th"
                        defaultValue={props.rowData.detail_th}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        { title: 'show', field: 'show', type: 'boolean' },
        {
            title: 'main_img', field: 'main_img', render: rowData => (rowData.main_img !== undefined ? (<img src={(rowData.main_img.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


                console.log(props);
                return <div style={{
                    margin: "15px"
                }}>
                    <div style={{
                        // display: "flex"
                    }}>

                        <input onChange={e => {
                            const reader = new FileReader();
                            var binData;
                            reader.addEventListener("load", function () {
                                // if(props.)
                                props.onChange({
                                    name: binData.name,
                                    lastModified: binData.lastModified,
                                    lastModifiedDate: binData.lastModifiedDate,
                                    webkitRelativePath: binData.webkitRelativePath,
                                    size: binData.size,
                                    type: binData.type,
                                    base64: reader.result
                                })

                                console.log(props);

                            }, false);

                            if (e.target.files[0]) {
                                reader.readAsDataURL(e.target.files[0]);
                                binData = e.target.files[0]
                                console.log(e.target.files[0]);

                            }
                        }} type="file" accept="image/*" name="image0" id="file0" style={{
                            marginBottom: '4px',
                        }}
                        // value={props.rowData.image.name}
                        />

                    </div>
                </div>

            }
        },
        {
            title: 'sub_img0', field: 'sub_img0', render: rowData => (rowData.sub_img0 !== undefined ? (<img src={(rowData.sub_img0.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


                console.log(props);
                return <div style={{
                    margin: "15px"
                }}>
                    <div style={{
                        // display: "flex"
                    }}>

                        <input onChange={e => {
                            const reader = new FileReader();
                            var binData;
                            reader.addEventListener("load", function () {
                                // if(props.)
                                props.onChange({
                                    name: binData.name,
                                    lastModified: binData.lastModified,
                                    lastModifiedDate: binData.lastModifiedDate,
                                    webkitRelativePath: binData.webkitRelativePath,
                                    size: binData.size,
                                    type: binData.type,
                                    base64: reader.result
                                })

                                console.log(props);

                            }, false);

                            if (e.target.files[0]) {
                                reader.readAsDataURL(e.target.files[0]);
                                binData = e.target.files[0]
                                console.log(e.target.files[0]);

                            }
                        }} type="file" accept="image/*" name="image0" id="file0" style={{
                            marginBottom: '4px',
                        }}
                        // value={props.rowData.image.name}
                        />

                    </div>
                </div>

            }
        },
        {
            title: 'sub_img1', field: 'sub_img1', render: rowData => (rowData.sub_img1 !== undefined ? (<img src={(rowData.sub_img1.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


                console.log(props);
                return <div style={{
                    margin: "15px"
                }}>
                    <div style={{
                        // display: "flex"
                    }}>

                        <input onChange={e => {
                            const reader = new FileReader();
                            var binData;
                            reader.addEventListener("load", function () {
                                // if(props.)
                                props.onChange({
                                    name: binData.name,
                                    lastModified: binData.lastModified,
                                    lastModifiedDate: binData.lastModifiedDate,
                                    webkitRelativePath: binData.webkitRelativePath,
                                    size: binData.size,
                                    type: binData.type,
                                    base64: reader.result
                                })

                                console.log(props);

                            }, false);

                            if (e.target.files[0]) {
                                reader.readAsDataURL(e.target.files[0]);
                                binData = e.target.files[0]
                                console.log(e.target.files[0]);

                            }
                        }} type="file" accept="image/*" name="image0" id="file0" style={{
                            marginBottom: '4px',
                        }}
                        // value={props.rowData.image.name}
                        />

                    </div>
                </div>

            }
        },
        {
            title: 'sub_img2', field: 'sub_img2', render: rowData => (rowData.sub_img2 !== undefined ? (<img src={(rowData.sub_img2.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


                console.log(props);
                return <div style={{
                    margin: "15px"
                }}>
                    <div style={{
                        // display: "flex"
                    }}>

                        <input onChange={e => {
                            const reader = new FileReader();
                            var binData;
                            reader.addEventListener("load", function () {
                                // if(props.)
                                props.onChange({
                                    name: binData.name,
                                    lastModified: binData.lastModified,
                                    lastModifiedDate: binData.lastModifiedDate,
                                    webkitRelativePath: binData.webkitRelativePath,
                                    size: binData.size,
                                    type: binData.type,
                                    base64: reader.result
                                })

                                console.log(props);

                            }, false);

                            if (e.target.files[0]) {
                                reader.readAsDataURL(e.target.files[0]);
                                binData = e.target.files[0]
                                console.log(e.target.files[0]);

                            }
                        }} type="file" accept="image/*" name="image0" id="file0" style={{
                            marginBottom: '4px',
                        }}
                        // value={props.rowData.image.name}
                        />

                    </div>
                </div>

            }
        },
        {
            title: 'sub_img3', field: 'sub_img3', render: rowData => (rowData.sub_img3 !== undefined ? (<img src={(rowData.sub_img3.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


                console.log(props);
                return <div style={{
                    margin: "15px"
                }}>
                    <div style={{
                        // display: "flex"
                    }}>

                        <input onChange={e => {
                            const reader = new FileReader();
                            var binData;
                            reader.addEventListener("load", function () {
                                // if(props.)
                                props.onChange({
                                    name: binData.name,
                                    lastModified: binData.lastModified,
                                    lastModifiedDate: binData.lastModifiedDate,
                                    webkitRelativePath: binData.webkitRelativePath,
                                    size: binData.size,
                                    type: binData.type,
                                    base64: reader.result
                                })

                                console.log(props);

                            }, false);

                            if (e.target.files[0]) {
                                reader.readAsDataURL(e.target.files[0]);
                                binData = e.target.files[0]
                                console.log(e.target.files[0]);

                            }
                        }} type="file" accept="image/*" name="image0" id="file0" style={{
                            marginBottom: '4px',
                        }}
                        // value={props.rowData.image.name}
                        />

                    </div>
                </div>

            }
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

export default useCollectionManager;