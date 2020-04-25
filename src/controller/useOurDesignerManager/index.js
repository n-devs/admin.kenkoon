import React, { useState, useEffect, Fragment } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
// import PropTypes from 'prop-types'
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function useOurDesignerManager(url) {
    const [data, setData] = useState([])
    // const [groupImage, setGroupImage] = useState(rowData.image.group)
    const [val, setVal] = React.useState('');
    const classes = useStyles();
    const theme = useTheme();
    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        // { title: 'type', field: 'type', editable: 'never' },
        { title: 'name', field: 'name' },
        { title: 'show', field: 'show', type: 'boolean' },
        {
            title: 'detail_en', field: 'detail_en', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="detail_en"
                        rowsMin={3}
                        placeholder="Description Detail"
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
                        rowsMin={3}
                        placeholder="Description Detail"
                        defaultValue={props.rowData.detail_th}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
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

export default useOurDesignerManager;