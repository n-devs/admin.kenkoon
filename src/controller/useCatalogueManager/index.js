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


function useCatalogueManager(url) {
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
            title: 'img', field: 'img', render: rowData => (rowData.img !== undefined ? (<img src={(rowData.img.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
            title: 'file', field: 'file', render: rowData => (rowData.file !== undefined ? (<img src={(rowData.file.base64)} style={{ width: 40, borderRadius: '5%' }} />) : ""), editComponent: props => {


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
                        }} type="file" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" name="image0" id="file0" style={{
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

export default useCatalogueManager;