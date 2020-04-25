import React, { useState, useEffect, Fragment } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import PropTypes from 'prop-types'
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


function useReferenceManager(url) {
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
            title: 'detail0_en', field: 'detail0_en', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail0_en"
                        rowsMin={3}
                        placeholder="detail0 en"
                        defaultValue={props.rowData.detail0_en}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        {
            title: 'detail0_th', field: 'detail0_th', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail0_th"
                        rowsMin={3}
                        placeholder="detail0 th"
                        defaultValue={props.rowData.detail0_th}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        {
            title: 'detail1_en', field: 'detail1_en', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail1_en"
                        rowsMin={3}
                        placeholder="detail1 en"
                        defaultValue={props.rowData.detail1_en}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        {
            title: 'detail1_th', field: 'detail1_th', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail1_th"
                        rowsMin={3}
                        placeholder="detail1 th"
                        defaultValue={props.rowData.detail1_th}
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
        },
        {
            title: 'sub_img4', field: 'sub_img4', render: rowData => (rowData.sub_img4 !== undefined ? (<img src={(rowData.sub_img4.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
            title: 'sub_img5', field: 'sub_img5', render: rowData => (rowData.sub_img5 !== undefined ? (<img src={(rowData.sub_img5.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
            title: 'sub_img6', field: 'sub_img6', render: rowData => (rowData.sub_img6 !== undefined ? (<img src={(rowData.sub_img6.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
            title: 'sub_img7', field: 'sub_img7', render: rowData => (rowData.sub_img7 !== undefined ? (<img src={(rowData.sub_img7.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
            title: 'sub_img8', field: 'sub_img8', render: rowData => (rowData.sub_img8 !== undefined ? (<img src={(rowData.sub_img8.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
            title: 'sub_img9', field: 'sub_img9', render: rowData => (rowData.sub_img9 !== undefined ? (<img src={(rowData.sub_img9.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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

export default useReferenceManager;